import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';

const RootPage = () => {
  console.log('Root Page');
  return (
    <div>
      <BarcodeScannerComponent
        width={200}
        height={200}
        onUpdate={(err, result) => {
          if (!err) {
            console.log('result ::::: ', result);
            alert(result);
          }
        }}
      />
    </div>
  );
};
export default RootPage;
