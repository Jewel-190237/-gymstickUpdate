import { useState } from 'react';
interface CounterProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}
const ProductButton: React.FC<CounterProps> = ({count, onIncrement, onDecrement}) => {
    return (
        <div className="flex items-center rounded-md border space-x-4">
            <button onClick={onDecrement}  disabled={count <= 1}  className={`px-6 py-3   ${count <= 1 ? 'opacity-50 cursor-not-allowed' : 'bg-primary text-white'}`} > - </button>
            <span className="text-xl">{count}</span>
            <button onClick={onIncrement}  disabled={count >= 10}   className={`px-6 py-3   ${count >= 10 ? 'opacity-50 cursor-not-allowed' : 'bg-primary text-white'}`} > + </button>
        </div>
    );
};

export default ProductButton;
