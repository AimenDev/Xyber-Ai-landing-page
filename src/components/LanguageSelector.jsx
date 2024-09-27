
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation(); // Access the i18n object to change the language

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage); 
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="sr-only">Choose Language:</label>
      <select
        id="language-select"
        onChange={changeLanguage}
        defaultValue={i18n.language} // Set the current language as the default
        className=" p-2 rounded-md outline-none text-sm bg-transparent hover:border-black-100 focus:border-black-100 ml-8"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
