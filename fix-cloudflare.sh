#!/bin/bash
cd ~/Github/lightgate

echo "=== SAFE CLOUDFLARE PAGES FIX ==="
echo "This script will NOT break your existing configuration."

echo "=== Step 1: Backup current configs ==="
cp next.config.js next.config.js.backup 2>/dev/null || true

echo "=== Step 2: Create proper Next.js config ==="
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
EOF

echo "=== Step 3: Create Cloudflare Pages config file ==="
cat > _config.json << 'EOF'
{
  "build": {
    "command": "npm run build",
    "output_directory": "out"
  }
}
EOF

echo "=== Step 4: Clean and test build locally ==="
rm -rf out .next
npm run build

echo "=== Step 5: Verify the build ==="
if [ -f "out/index.html" ]; then
    echo "✅ Build successful! Found index.html in 'out' directory"
    echo "First few lines of index.html:"
    head -20 out/index.html
else
    echo "❌ Build failed - no index.html found"
    echo "Reverting to backup config..."
    cp next.config.js.backup next.config.js 2>/dev/null || true
    exit 1
fi

echo "=== Step 6: Create a test file to verify deployment ==="
echo "CLOUDFLARE TEST - If you see this, static files are working!" > out/deployment-test.txt

echo ""
echo "=== ✅ SCRIPT COMPLETE ==="
echo ""
echo "=== What to do next: ==="
echo "1. Go to Cloudflare Dashboard → Pages → lightgate"
echo "2. Settings → Builds & deployments"
echo "3. Set Build command to: npm run build"
echo "4. CLEAR BUILD CACHE (important!)"
echo "5. Save and trigger new deployment"
echo ""
echo "=== After deployment, test: ==="
echo "- https://lightgate.media/deployment-test.txt"
echo "- https://lightgate.media/"
echo ""
echo "=== To revert if needed: ==="
echo "Run: cp next.config.js.backup next.config.js"
