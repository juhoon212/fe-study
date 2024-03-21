
function TabButton({children, onSelect}) {
    console.log("tabbutton 실행")
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TabButton