const HostLanguage = ({ filters, setFilters }) => {
  const data = [
    "English",
    "French",
    "German",
    "Japanese",
    "Italian",
    "Russian",
    "Spanish",
    "Chinese",
    "Arabic",
    "Hindi",
    "Portuguese",
    "Turkish",
    "Indonesian",
    "Dutch",
    "Korean",
    "Bengali",
    "Thai",
    "Punjabi",
    "Greek",
    "Sign",
    "Hebrew",
    "Polish",
    "Malay",
    "Tagalog",
    "Danish",
    "Swedish",
    "Norwegian",
    "Finnish",
    "Czech",
    "Hungarian",
    "Ukrainian",
  ];

  const changeCheckbox = (event, value) => {
    if (event.target.checked) {
      const d = [...filters.host_language, value];
      setFilters({ ...filters, host_language: [...new Set(d)] });
    } else {
      const d = [...filters.host_language].filter((e) => e !== value);
      setFilters({ ...filters, host_language: [...new Set(d)] });
    }
  };

  return (
    <div className="pb-6 w-full px-6">
      <h1 className="text-xl font-semibold mb-4">Host language</h1>
      <div className="flex flex-wrap gap-4 w-full">
        {data.map((e, i) => (
          <div className="w-[calc(100%/2-8px)] flex items-center gap-4">
            <input
              type="checkbox"
              onChange={(event) => changeCheckbox(event, e)}
              className="text-2xl w-4 h-4"
              name={e}
              id={e}
            />
            <label htmlFor={e} className="text-xl select-none">
              {e}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostLanguage;
