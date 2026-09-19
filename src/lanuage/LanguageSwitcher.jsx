import { useState } from "react";

const content = {
  ru: {
    label: "RU",
    heading: "Добро пожаловать",
    text: "Это пример текста, который меняется вместе с языком интерфейса.",
  },
  en: {
    label: "EN",
    heading: "Welcome",
    text: "This is sample text that changes along with the interface language.",
  },
};

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("ru");
  const other = lang === "ru" ? "en" : "ru";
  const t = content[lang];

  return (
    <div className="min-h-[240px] w-full flex items-center justify-center bg-stone-50 p-6">
      <div className="w-full max-w-sm rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex justify-end mb-4">
          <div className="inline-flex rounded-full bg-stone-100 p-1">
            {["ru", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  lang === code
                    ? "bg-stone-900 text-white"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                {content[code].label}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-semibold text-stone-900 mb-2">
          {t.heading}
        </h2>
        <p className="text-stone-600 leading-relaxed">{t.text}</p>
      </div>
    </div>
  );
}



