const Markets = () => {
  return (
    <section className="markets-section">
      <div className="max-w-7xl mx-auto markets-container">
        {/* HEADER */}
        <div className="markets-header">
          <h4>Markets that matter today</h4>
          <p>
            Open financial protocols are reshaping global access, enabling
            transparency, participation, and opportunity across digital
            economies worldwide.
          </p>
        </div>

        {/* TRADINGVIEW WIDGET */}
        <div className="markets-widget">
          <iframe
            title="Crypto Market Screener"
            allowTransparency="true"
            frameBorder="0"
            src="https://s.tradingview.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A420%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%7D"
          />
        </div>
      </div>
    </section>
  );
};

export default Markets;
