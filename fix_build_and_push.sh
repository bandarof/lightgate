#!/bin/bash
# ================================================
# 1️⃣ Stop any running dev/build servers
# ================================================
echo "Stopping Next.js servers if running..."
pkill -f "next dev" || true

# ================================================
# 2️⃣ Clean old builds and node_modules
# ================================================
echo "Cleaning old builds..."
rm -rf node_modules package-lock.json .next

# ================================================
# 3️⃣ Ensure correct React/React-DOM versions
# ================================================
echo "Installing correct React versions..."
npm install react@18.2.0 react-dom@18.2.0

# ================================================
# 4️⃣ Install dependencies
# ================================================
echo "Installing project dependencies..."
npm install

# ================================================
# 5️⃣ Fix context imports in all builder-related files
# ================================================
echo "Fixing context imports..."
# Replace any 'import * as React' with 'import React, { createContext, useContext }'
find ./src -type f -name "*.tsx" -exec sed -i 's/import \* as React/import React, { createContext, useContext }/g' {} \;

# ================================================
# 6️⃣ Ensure layout.tsx wraps children with context provider
# ================================================
cat > ./src/app/layout.tsx << 'EOF'
import React from "react";
import { BuilderContextProvider } from "../components/builder-registry-client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BuilderContextProvider>
          {children}
        </BuilderContextProvider>
      </body>
    </html>
  );
}
EOF

# ================================================
# 7️⃣ Clean Next.js build cache
# ================================================
echo "Cleaning Next.js cache..."
rm -rf .next

# ================================================
# 8️⃣ Build locally to ensure it works
# ================================================
echo "Building Next.js project locally..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Check the errors above."
    exit 1
fi

# ================================================
# 9️⃣ Start SSH agent and add your correct key
# ================================================
echo "Starting SSH agent and adding bandarof key..."
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_bandarof

# ================================================
# 🔟 Push to GitHub
# ================================================
echo "Setting correct Git remote and pushing..."
git remote set-url origin git@github.com:bandarof/lightgate.git
git add .
git commit -m "Fix Builder.io context and React imports for cloud deployment"
git push -u origin main

echo "✅ Done! Your fix is pushed to GitHub and should deploy successfully."
