export default function Select({children, name, className, onFocus}) {
    return (
        <div name={name} className={className}>
            {children}
        </div>
    )
}