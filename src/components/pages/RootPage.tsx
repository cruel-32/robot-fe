import React, { useEffect } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import BarcodeReader from 'react-barcode-reader';
import Quagga from 'quagga';

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

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#barcode-reader'), // Or '#yourElement' (optional)
          width: 320,
          height: 240,
        },
        decoder: {
          readers: ['code_128_reader'],
        },
      },
      (err: any) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. ::::: Ready to start');
        Quagga.start();
        Quagga.onDetected((data: any) => {
          if (data) console.log('onDetected data ::::: ', data);
          if (data?.codeResult?.code) alert(data?.codeResult?.code);
        });
        Quagga.onProcessed((data: any) => {
          if (data) console.log('onProcessed data ::::: ', data);
          if (data?.codeResult?.code) alert(data?.codeResult?.code);
        });
        Quagga.decodeSingle({}, (data: any) => {
          if (data) console.log('decodeSingle data ::::: ', data);
          if (data?.codeResult?.code) alert(data?.codeResult?.code);
        });
      }
    );
  }, []);

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
      <div id="barcode-reader" />
    </div>
  );
};
export default RootPage;
