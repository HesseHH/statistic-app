import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setColumns } from "../../store/frecuency-table/frecuencyTableSlice";

// The id of each formula is the name of the attribute in columnByFormula(columns.js)

const formula1 = {
    id: 'formula1',
    text: "\\(\\sigma^2 = \\frac{\\sum_{i=1}^{n}fx_i^2}{n}-\\bar{x}^2\\)"
};
const formula2 = {
    id: 'formula2',
    text: "\\(\\sigma^2 = \\frac{\\sum_{i=1}^{n}f(x_i-\\bar{x})^2}{n}\\)"
};
const formula3 = {
    id: 'formula3',
    text: "\\(\\sigma^2 = \\frac{\\sum_{i=1}^{n}fx_i^2}{n}-\\bar{x}^2\\)"
};
const formula4 = {
    id: 'formula4',
    text: "\\(\\sigma^2 = \\frac{\\sum_{i=1}^{n}f(x_i-\\bar{x})^2}{n}\\)"
};

export const SelectColumns = () => {

    const dispatch = useDispatch();

    const [op, setOp] = useState(0);
    const [zIndex, setZIndex] = useState('-');
    const { groupedData } = useSelector(state => state.frecuencyTable)
    const [selectedFormula, setSelectedFormula] = useState(formula1);

    useLayoutEffect(() => {
        window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
        setSelectedFormula(groupedData ? formula3 : formula1);
    }, [groupedData]);

    useEffect(() => {
        document.addEventListener('click', handleClickEvent);
    }, []);

    const handleClickEvent = event => {
        const divFormula = document.getElementById('formula');
        const targetElement = event.target;

        if (!divFormula) document.removeEventListener('click', handleClickEvent);

        if (divFormula.contains(targetElement) === false) {
            setOp(0);
            setZIndex('-');
        }
    }

    const onClickFormula = (formula) => {
        setSelectedFormula(formula);
        setOp(0);
        setZIndex('-');
        dispatch(setColumns({ formula: formula.id }));
    }

    const onOpenCloseFormula = () => {
        setOp(value => value == 0 ? 100 : 0);
        setZIndex(value => value == '-' ? '' : '-');
    }

    return (
        <div className="relative" >
            <div id="formula" onClick={() => onOpenCloseFormula()} className="inline-block cursor-pointer">
                <div className="flex items-center">
                    Formula:&nbsp;
                    <span className="text-2xl">
                        {selectedFormula.text}
                    </span>
                </div>
            </div>
            <div className={`absolute top-0 left-16 bg-slate-950 rounded-lg opacity-${op} ${zIndex}z-50`}>
                <div
                    className="hover:bg-slate-900 p-3 rounded-lg cursor-pointer"
                    onClick={() => onClickFormula(groupedData ? formula4 : formula2)}
                >
                    <span className="text-2xl">
                        {groupedData ? formula4.text : formula2.text}
                    </span>
                </div>
                <div
                    className="text-2xl hover:bg-slate-900 p-3 rounded-lg cursor-pointer"
                    onClick={() => onClickFormula(groupedData ? formula3 : formula1)}
                >
                    <span>
                        {groupedData ? formula3.text : formula1.text}
                    </span>
                </div>
            </div>
        </div>
    )
}
