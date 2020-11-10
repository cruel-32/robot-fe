/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

import { useMst } from '@/stores';

export default observer(() => {
  const { counter, cart } = useMst();
  const [name, setName] = useState('The Hobbit');
  const [price, setPrice] = useState(20);

  const isDisabled = () => name === '' || price === 0;
  return (
    <div>
      <div className="mt-20 flex flex-col items-center">
        <p className="font-bold text-2xl text-center">Counter</p>
        <p
          style={{ fontVariant: 'tabular-nums' }}
          className="font-bold text-2xl text-center"
        >
          {counter.count}
        </p>
        <div className="mt-2 flex-row">
          <button type="button" onClick={counter.decrement}>
            -
          </button>
          <button type="button" className="ml-2" onClick={counter.increment}>
            +
          </button>
        </div>
      </div>
      <div className="w-64 mx-auto mt-16">
        <p className="font-bold text-2xl text-center">Item Cart</p>
        <label className="block">
          <span className="text-gray-200">Name</span>
          <input
            className="form-input mt-1 block w-full"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e && e.target) {
                setName(e.target.value);
              }
            }}
          />
        </label>
        <label className="block mt-2">
          <span className="text-gray-200">Price</span>
          <input
            className="form-input mt-1 block w-full"
            type="number"
            min="0.0"
            step="any"
            value={price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e && e.target) {
                setPrice(Number(e.target.value));
              }
            }}
          />
        </label>
        <div className="mt-4 flex items-center">
          <p
            style={{ fontVariant: 'tabular-nums' }}
            className="leading-tight font-bold text-lg"
          >
            Items: {cart.totalItems}
          </p>
          <p
            style={{ fontVariant: 'tabular-nums' }}
            className="ml-4 flex-grow leading-tight font-bold text-lg"
          >
            Total: {cart.totalPrice}
          </p>
          <button
            type="button"
            disabled={isDisabled()}
            className={`ml-4 ${isDisabled() ? 'cursor-not-allowed' : ''}`}
            onClick={() => {
              cart.addCartItem({
                name,
                price,
              });
            }}
          >
            Add
          </button>
        </div>
        <div className="my-12 h-64 bg-gray-800 rounded overflow-y-scroll">
          {cart.items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={`${
                index !== 0 && 'mt-2'
              } mr-2 px-4 py-2 flex items-center rounded rounded-sm leading-tight text-gray-700 bg-gray-200`}
            >
              <div className="flex-grow">{item.name}</div>
              <div>{item.price}</div>
              <button
                type="button"
                className="ml-5 cursor-pointer select-none"
                onClick={item.remove}
                aria-label="delete"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
