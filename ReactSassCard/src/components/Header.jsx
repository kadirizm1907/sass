import headerStyle from "../scss/header.module.scss"

const Header = () => {
  return (
    <div className={headerStyle.title}>
        <h1 className={headerStyle.header}>Employees Comments</h1>
    </div>
  )
}

export default Header