
const Button = ({
    children,
    type="Button",
    bgColor="bg-blue-600",
    textColor="text-white",
    className='',
...props}) => {
  return (
    <div>
        <Button className={`${className} ${textColor} ${bgColor}`}type={type}{...props}>{children}</Button>
      
    </div>
  )
}

export default Button
