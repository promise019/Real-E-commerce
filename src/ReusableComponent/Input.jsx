export default function Input({ type, value, onChange, placeholder }) {
    return(
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}
         className='w-[100%] border rounded-xl p-1 mb-[5%] xl:[0%]'
        />
    )
}