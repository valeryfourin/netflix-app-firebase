const ReportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
        return { getCLS, getFID, getFCP, getLCP, getTTFB };
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};

export default ReportWebVitals;
