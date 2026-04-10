import React from "react";
// ********************NOTESSSS?****************************
// ✔ onChange triggers when user types → correct behavior
// e.target → the input element
// .value → what user typed

// 👉 Example:

// User types: 123
// e.target.value = "123"

// ⚠️ Important: it's always a string

// 🔹 3. Number(e.target.value)
// Number(e.target.value)
// Converts string → number

// 👉 Example:

// "123" → 123
// "5.5" → 5.5
// "" → 0

// 4. onAmountChange && ...
// onAmountChange && onAmountChange(...)

// This is called short-circuiting.

// Meaning:
// If onAmountChange exists → call it
// If not → do nothing

// 👉 Equivalent to:

// if (onAmountChange) {
//     onAmountChange(Number(e.target.value));
// }

// ********************NOTESSSS?****************************

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOption.map((currency) => (

                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;

// ********************NOTESSSS?****************************

// 🔹 1. What is a Component?
// 👉 Definition (simple)

// A component is a reusable piece of UI (like a function that returns HTML).

// 👉 In YOUR code:
// function InputBox({ ... })

// ✔ InputBox = Component

// 👉 What it does:
// Shows an input field
// Shows a currency dropdown
// Can be reused anywhere
// 👉 Think like this:
// Component = UI block (like LEGO piece)

// Examples:

// Navbar
// Button
// InputBox (your case)
// 🔹 2. What are Props?
// 👉 Definition (simple)

// Props = data passed into a component

// They make components dynamic and reusable.

// 👉 In YOUR code:
// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOption = [],
//     selectCurrency = 'usd',
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// })

// All of these are props.

// 🔹 3. Component vs Props (Clear Difference)
// Concept	Meaning	Example from your code
// Component	UI block	InputBox
// Props	Data given to component	label, amount, etc
// 🔹 4. How Props Work (Flow)
// 👉 Parent Component:
// <InputBox
//     label="From"
//     amount={amount}
//     onAmountChange={setAmount}
//     currencyOption={["usd", "inr"]}
//     selectCurrency="usd"
// />
// 👉 Inside InputBox:
// <label>{label}</label>
// <input value={amount} />
// 👉 Flow:
// Parent → passes props → InputBox → renders UI
// 🔹 5. Types of Props in Your Code

// Let’s classify them 👇

// ✅ 1. Data Props (Values)

// These just display data:

// label
// amount
// selectCurrency
// currencyOption

// 👉 Example:

// <label>{label}</label>
// ✅ 2. Function Props (Very Important)

// These control behavior:

// onAmountChange
// onCurrencyChange

// 👉 Example:

// onChange={(e) => onAmountChange(...)}

// ✔ These come from parent
// ✔ Used to update state

// ✅ 3. Boolean Props (Control UI)
// amountDisable
// currencyDisable

// 👉 Example:

// disabled={amountDisable}

// ✔ Used to enable/disable inputs

// ✅ 4. Styling Props
// className

// 👉 Used here:

// <div className={`... ${className}`}>

// ✔ Allows custom styling from parent

// 🔹 6. Why Props Are Needed

// Without props:
// ❌ Component is fixed
// ❌ Not reusable

// With props:
// ✔ Dynamic
// ✔ Reusable
// ✔ Controlled from parent

// 🔹 7. Real-Life Analogy
// Component = Machine
// Props = Input given to machine

// Example:

// Coffee Machine (Component)
// → Sugar, Milk, Coffee (Props)
// → Output changes based on input
// 🔹 8. Key Concept (VERY IMPORTANT)

// Your component is a:

// 👉 Controlled Component

// Because:

// value={amount}

// ✔ Value comes from parent
// ✔ Changes via onAmountChange

// 🔹 9. Final Summary
// 🔹 Component:
// InputBox

// ✔ Reusable UI function

// 🔹 Props:
// label, amount, onAmountChange, ...

// ✔ Inputs to component
// ✔ Control data + behavior

// 🔹 One-line Understanding:
// Component = structure
// Props = customization

// ********************NOTESSSS?****************************
