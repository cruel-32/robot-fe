import React from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import BarcodeReader from 'react-barcode-reader';

const RootPage = () => {
  console.log('Root Page');

  const onError = (e: any) => {
    console.log('onError ::::: ', e);
    alert(e);
  };

  const onScan = (e: any) => {
    console.log('onScan ::::: ', e);
    alert(e);
  };

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
      <BarcodeReader onError={onError} onScan={onScan} />
    </div>
  );
};
export default RootPage;
