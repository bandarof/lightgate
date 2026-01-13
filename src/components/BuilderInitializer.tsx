"use client";

import React from 'react';
import { Builder } from '@builder.io/react';
import { useEffect } from 'react';

export default function BuilderInitializer() {
  useEffect(() => {
    // Register a simple heading component
    Builder.registerComponent(
      ({ text }: { text: string }) => (
        <h1 className="text-4xl font-bold text-blue-600">{text}</h1>
      ),
      {
        name: 'Heading',
        inputs: [
          {
            name: 'text',
            type: 'string',
            defaultValue: 'Hello World',
          },
        ],
      }
    );

    // Register a button component
    Builder.registerComponent(
      ({ text, link }: { text: string; link: string }) => (
        <a
          href={link}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {text}
        </a>
      ),
      {
        name: 'Button',
        inputs: [
          {
            name: 'text',
            type: 'string',
            defaultValue: 'Click me',
          },
          {
            name: 'link',
            type: 'string',
            defaultValue: '#',
          },
        ],
      }
    );
    
    console.log('Builder.io components registered');
  }, []);

  return null;
}
