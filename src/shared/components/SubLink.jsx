import { Link } from './';

export const SubLink = ({ childs, activated }) => {
    return (
        <div className={`${childs.childrens ? 'pl-4' : 'pl-11'} overflow-hidden mt-2`}>
            <div
                style={{
                    height: activated ? '100%' : '0px',
                    transition: 'all .5s'
                }}
            >
                {childs.map((child, i) => (
                    <Link
                        key={i}
                        text={child.text}
                        link={child.link}
                        childs={child.childrens}
                    />
                ))}
            </div>
        </div>
    )
}
