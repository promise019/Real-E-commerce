export default function Input({ type, value, onChange, placeholder }) {
    return(
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}
         className='w-[100%] border border-gray-300 rounded-lg p-3 mb-2 inset'
        />
    )
}