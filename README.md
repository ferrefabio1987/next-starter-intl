# Next.js Starter with Prettier, ESLint, and next-intl

This repository provides a ready-to-use boilerplate for initializing a Next.js project with:

- **Prettier**: Code formatting made easy.
- **ESLint**: Linting to maintain clean and consistent code.
- **next-intl**: Internationalization (i18n) for building multi-language applications.

## 🚀 Features

- Pre-configured **Prettier** for automatic code formatting.
- Ready-to-use **ESLint** configuration for Next.js and JavaScript/TypeScript projects.
- **next-intl** integrated for seamless internationalization.
- Minimal setup to start developing immediately.

## 📦 Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/ferrefabio1987/next-starter-intl.git
    cd next-starter-intl
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

## 🛠️ Scripts

- dev: Start the development server.
- build: Build the application for production.
- start: Start the production server.
- lint: Run ESLint to check for code issues.
- format: Format code using Prettier.

## 🗂️ Project Structure

```bash
├── /public         # Public assets
├── /messages       # Localization files for next-intl
├── /app/styles     # Global and modular CSS styles
├── /app/components # Reusable components
├── .eslintrc.json  # ESLint configuration
├── .prettierrc     # Prettier configuration
├── next.config.js  # Next.js configuration
└── README.md       # Project documentation
```

## 🌍 Internationalization with next-intl

The project uses next-intl to handle internationalization. Translation files are stored in the /locales folder, organized by language code (e.g., en, it).

Example
Add a translation key to /messages/en.json:

```bash
{
    "Index": {
        "welcome": "Welcome to Next.js!"
    }
}
```

Then use it in your components:

```bash
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return <h1>{t('welcome')}</h1>;
}
```

## 🧹 Linting and Formatting

- Run ESLint:

    ```bash
    npm run lint
    ````

- Format code with Prettier::

    ```bash
    npm run format
    ````

## 🤝 Contributing

Feel free to fork this repository and make your changes. Pull requests are welcome!

## 📄 License

This project is licensed under the MIT License.
