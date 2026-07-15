# Medical Sample Project

A comprehensive Next.js medical practice management system with a well-organized folder structure.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the app and `http://localhost:3000/example` to see the demo page.

## 📁 Project Structure

The project follows a scalable and maintainable folder structure:

```
src/
├── app/              # Next.js App Router (pages & routes)
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── layout/      # Layout components
│   ├── features/    # Feature-specific components
│   ├── forms/       # Form components
│   └── common/      # Common shared components
├── lib/             # Utilities & helpers
│   ├── utils/       # General utilities
│   └── helpers/     # Helper functions
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── services/        # API services
├── config/          # Configuration files
├── constants/       # Application constants
└── styles/          # Additional styles
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom component library
- **State Management:** React Hooks
- **Code Quality:** ESLint

## 📦 Key Features

### ✅ Ready to Use

1. **UI Component Library**
   - Button (multiple variants and sizes)
   - Input (with labels and error handling)
   - Card (with composable sub-components)

2. **Utility Functions**
   - Class name merger (`cn`)
   - Date and currency formatters
   - Email and phone validators

3. **Type Definitions**
   - Patient types
   - API response types
   - Common types

4. **Custom Hooks**
   - `useDebounce` - Debounce values
   - `useLocalStorage` - Type-safe localStorage

5. **API Service Layer**
   - Base API client with error handling
   - Typed request/response

6. **Configuration & Constants**
   - Site configuration
   - Route definitions
   - Success/error messages

## 📖 Usage Examples

### Components

```typescript
import { Button, Input, Card } from "@/components/ui";

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

<Input 
  label="Email" 
  type="email" 
  error={errors.email}
/>
```

### Utilities

```typescript
import { formatDate, isValidEmail, cn } from "@/lib/utils";

const formattedDate = formatDate(new Date(), "medium");
const isValid = isValidEmail("test@example.com");
const classes = cn("base-class", { "active": isActive });
```

### Hooks

```typescript
import { useDebounce, useLocalStorage } from "@/hooks";

const debouncedValue = useDebounce(searchTerm, 500);
const [theme, setTheme] = useLocalStorage("theme", "light");
```

## 🎯 Development Guidelines

### File Naming Conventions

- **Components:** PascalCase (`Button.tsx`, `PatientCard.tsx`)
- **Utilities:** camelCase (`formatters.ts`, `validators.ts`)
- **Types:** camelCase with `.types.ts` (`patient.types.ts`)
- **Services:** camelCase with `.service.ts` (`api.service.ts`)

### Import Aliases

Use `@/` for cleaner imports:

```typescript
// ✅ Good
import { Button } from "@/components/ui";

// ❌ Avoid
import { Button } from "../../components/ui/Button";
```

### Code Quality

- Write type-safe code with TypeScript
- Use ESLint rules
- Add JSDoc comments for public APIs
- Keep components focused and single-purpose

## 📝 Documentation

- [Project Structure](./PROJECT_STRUCTURE.md) - Detailed folder structure
- [Components README](./src/components/README.md) - Component organization
- [Utilities README](./src/lib/README.md) - Utility functions
- [Types README](./src/types/README.md) - Type definitions
- [Services README](./src/services/README.md) - API services

## 🚧 Next Steps

1. **Authentication**
   - Set up auth service
   - Create login/register pages
   - Add protected routes

2. **Patient Management**
   - Patient list view
   - Patient detail page
   - Create/edit patient forms

3. **Appointments**
   - Appointment calendar
   - Booking system
   - Reminder notifications

4. **Dashboard**
   - Statistics widgets
   - Recent activity
   - Quick actions

## 📄 License

This project is created for educational and demonstration purposes.

---

Built with ❤️ using Next.js and TypeScript
