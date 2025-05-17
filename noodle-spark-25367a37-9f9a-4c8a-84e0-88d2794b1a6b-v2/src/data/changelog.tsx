export type ChangelogEntry = {
  id: number;
  date: string;
  title: string;
  description: string;
  features?: string[];
  improvements?: string[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    id: 1,
    date: "2025-05-16",
    title: "Supercharged Coding with Monaco Editor! 🚀",
    description: "I've cooked up some amazing upgrades to make your coding experience even more delicious! The Monaco editor integration brings professional-grade tools right to your bowl, while smart background processing lets you keep slurping code while I work my magic behind the scenes.",
    features: [
      "Advanced Code Editor: I've integrated Monaco (the editor that powers VS Code) to give you a professional-grade coding experience with syntax highlighting, auto-completion, and better file navigation when customizing your projects.",
      "Smart Background Processing: Your AI tasks now run in the background, so you can continue working while complex operations complete behind the scenes. I keep track of your project context even when processing asynchronously.",
      "Detailed AI Model Selection: Choose the perfect AI model for your specific project needs with my new enhanced model descriptions and selection interface."
    ],
    improvements: [
      "Smarter Memory Management: I've improved how project memory works to maintain perfect context across different versions, ensuring your AI has all the information it needs for better results.",
      "iOS Notification Reliability: Fixed issues with notifications on iOS devices to ensure you never miss important updates about your projects.",
      "Prototype Preview Consistency: Enhanced my prototype preview component for more reliable rendering across different browsers and device sizes."
    ]
  },
  {
    id: 2,
    date: "2025-05-02",
    title: "Prototype Like a Pro! 🎨",
    description: "Visualizing your ideas just got a major upgrade! I've enhanced the prototyping experience with smoother rendering and better state persistence. Plus, I've expanded the documentation to help you squeeze every drop of potential from your NoodleSeed projects!",
    features: [
      "Enhanced Prototyping Experience: I've improved my prototype preview functionality with better rendering and state persistence, making it easier to visualize and test your projects.",
      "Expanded Documentation: New examples and use cases added to help you get the most out of NoodleSeed's AI capabilities."
    ],
    improvements: [
      "Faster AI Responses: Improved overall system performance to reduce response times when interacting with AI components.",
      "Project Context Reliability: Fixed issues with context preservation to ensure more consistent AI interactions across sessions."
    ]
  },
  {
    id: 3,
    date: "2025-04-18",
    title: "Team Up with Gemini 2.0! 👥",
    description: "Exciting news! I now support Google's powerful Gemini 2.0 model, bringing best-in-class AI capabilities to your NoodleSeed projects. Plus, real-time collaboration means your whole team can join the noodle party at once!",
    features: [
      "Real-time Collaboration: Invite team members to collaborate on projects simultaneously, with changes syncing instantly so everyone stays on the same page.",
      "Gemini 2.0 Integration: I've added support for Google's latest Gemini 2.0 model, bringing best-in-class AI capabilities to your NoodleSeed projects."
    ],
    improvements: [
      "Memory Efficiency: Optimized how project memory is stored and retrieved, resulting in faster load times for complex projects.",
      "Responsive UI Improvements: Enhanced the mobile experience with better touch controls and layout optimizations for smaller screens."
    ]
  },
  {
    id: 4,
    date: "2025-04-04",
    title: "Templates & Components Galore! 🧩",
    description: "Jumpstart your work with pre-built templates for common use cases! I've also added 25+ new UI components to the library, giving you more building blocks for creating sophisticated interfaces. More options, more creativity!",
    features: [
      "Project Templates: Jumpstart your work with pre-built templates for common use cases, saving you time and providing best practice examples.",
      "Component Library Expansion: I've added 25+ new UI components to the library, giving you more building blocks for creating sophisticated interfaces."
    ],
    improvements: [
      "Dark Mode Refinements: Improved color contrast and readability throughout the dark mode interface.",
      "API Connection Stability: Fixed intermittent connection issues when integrating with external data sources."
    ]
  },
  {
    id: 5,
    date: "2025-03-21",
    title: "Speak Your Database Into Existence! 🗣️",
    description: "Ever wished you could just tell me what kind of database you need? Well, now you can! Simply describe the data you need, and I'll generate appropriate database schemas and sample data automatically. Plus, new options for exporting your projects, including standalone code packages!",
    features: [
      "Natural Language Database Creation: Simply describe the data you need, and I'll generate appropriate database schemas and sample data automatically.",
      "Export Improvements: New options for exporting your projects, including standalone code packages that can be deployed anywhere."
    ],
    improvements: [
      "Iteration Speed: Reduced the time it takes to generate new versions of your project when making iterative changes.",
      "Authentication Flow: Streamlined the sign-in experience with faster token refresh and better session management."
    ]
  },
  {
    id: 6,
    date: "2025-03-07",
    title: "AI-Powered Debugging at Your Service! 🛠️",
    description: "I can now detect and suggest fixes for common issues in your projects, helping you resolve problems faster! Plus, save and reuse your favorite design settings across projects to maintain consistent branding.",
    features: [
      "AI-Powered Debugging: I can now detect and suggest fixes for common issues in your projects, helping you resolve problems faster.",
      "Custom Style Presets: Save and reuse your favorite design settings across projects to maintain consistent branding."
    ],
    improvements: [
      "Error Messages: Rewrote error notifications to be more helpful and actionable, with clearer explanations of what went wrong.",
      "Build Performance: Optimized the build process to reduce wait times when previewing your projects."
    ]
  },
  {
    id: 7,
    date: "2025-02-21",
    title: "Charts, Graphs, and Multi-language Support! 📊",
    description: "Create interactive charts and graphs with my new visualization tools that automatically adapt to your data! Plus, I now support prompt-based development in Python and JavaScript, expanding the types of projects you can build.",
    features: [
      "Data Visualization Library: Create interactive charts and graphs with my new visualization tools that automatically adapt to your data.",
      "Multi-language Support: I now support prompt-based development in Python and JavaScript, expanding the types of projects you can build."
    ],
    improvements: [
      "Image Handling: Improved how images are processed and displayed, with better compression and faster loading times.",
      "Project Organization: Enhanced the project dashboard with customizable views and better sorting options."
    ]
  },
  {
    id: 8,
    date: "2025-02-07",
    title: "Just Say the Word! 🎤",
    description: "Control NoodleSeed with voice commands for a hands-free development experience, perfect for when you're multitasking! And track your project's performance and user engagement with our new built-in analytics tools.",
    features: [
      "Voice Command Integration: Control NoodleSeed with voice commands for a hands-free development experience, perfect for when you're multitasking.",
      "Advanced Analytics Dashboard: Track your project's performance and user engagement with our new built-in analytics tools."
    ],
    improvements: [
      "Search Functionality: Completely redesigned search with better results and the ability to search within generated code.",
      "Memory Consumption: Reduced the application's memory footprint for smoother performance on all devices."
    ]
  },
  {
    id: 9,
    date: "2025-01-24",
    title: "Responsive Design? I'll Handle That! 📱",
    description: "Making your creations look great on any device is now easier than ever. I've added responsive design automation to automatically optimize your projects for different screen sizes. Plus, I now offer intelligent suggestions based on your project history!",
    features: [
      "Context-Aware Suggestions: I now offer intelligent suggestions based on your project history and common patterns in your work.",
      "Responsive Design Automation: Automatically optimize your projects for different screen sizes with our new responsive design tools."
    ],
    improvements: [
      "Color Theme Consistency: Ensured consistent application of color themes throughout the interface and generated projects.",
      "Code Generation Speed: Dramatically improved the speed of complex code generation by up to 40%."
    ]
  },
  {
    id: 10,
    date: "2025-01-10",
    title: "Learn Faster, Compare Better! 🔍",
    description: "Get up to speed quickly with our new interactive tutorials that guide you through building your first projects! Plus, easily compare different versions of your project with our visual diff tool to see exactly what changed.",
    features: [
      "Interactive Tutorial System: Get up to speed quickly with our new interactive tutorials that guide you through building your first projects.",
      "Version Comparison: Easily compare different versions of your project with our visual diff tool to see exactly what changed."
    ],
    improvements: [
      "Startup Performance: Reduced application startup time by 30% for a faster entry into your workflow.",
      "UI Responsiveness: Eliminated UI lag in the main editor, ensuring a smooth experience even with complex projects."
    ]
  }
];
