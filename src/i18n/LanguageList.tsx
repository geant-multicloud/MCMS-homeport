import { FunctionComponent } from 'react';
import Select from 'react-select';

import { LanguageOption } from '@waldur/core/types';
import { reactSelectMenuPortaling } from '@waldur/form/utils';

import { translate } from './translate';
import { useLanguageSelector } from './useLanguageSelector';

import './LanguageList.scss';

export const LanguageList: FunctionComponent = () => {
  const { currentLanguage, languageChoices, setLanguage } =
    useLanguageSelector();

  const len = languageChoices.length;

  if (len <= 1) {
    return null;
  } else if (len <= 3) {
    return (
      <ul className="list-inline language-list m-t-md text-center">
        {languageChoices.map((language) => (
          <li
            key={language.code}
            onClick={() => setLanguage(language)}
            className="list-inline-item cursor-pointer"
          >
            <span className={language === currentLanguage ? 'font-bold' : ''}>
              {language.label}
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <Select
        placeholder={translate('Please select your language')}
        options={languageChoices}
        value={currentLanguage}
        onChange={setLanguage}
        isClearable={false}
        getOptionValue={(option: LanguageOption) => option.code}
        getOptionLabel={(option: LanguageOption) => option.label}
        {...reactSelectMenuPortaling()}
      />
    );
  }
};
