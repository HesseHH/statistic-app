export const info = {
    nonGroupedData: [
        {
            id: 'n-info',
            title: 'Cantidad datos (\\(n\\))',
            text: 'La letra \\(n\\) corresponde a la cantidad total de datos',
            formula: null
        },
        {
            id: 'frecuencia-absoluta-info',
            title: 'Frecuencia absoluta (\\(f\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística" target="blank" class="hover:text-cyan-400">frecuencia absoluta</a></b> es la cantidad de ocurrencia de una variable.',
            formula: null
        },
        {
            id: 'frecuencia-absoluta-acumulada-info',
            title: 'Frecuancia absoluta acumulada (\\(F\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística#Frecuencia_absoluta_acumulada" target="blank" class="hover:text-cyan-400">frecuencia absoluta acumulada</a></b> de una variable es la suma de su frecuencia absoluta y la frecuencia absoluta acumulada de la variable anterior.',
            formula: '\\(F = f_i+F_{i-1}\\)'
        },
        {
            id: 'frecuencia-relativa-info',
            title: 'Frecuencia relativa (\\(f_r\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística#Frecuencia_relativa" target="blank" class="hover:text-cyan-400">frecuencia relativa</a></b> representa la proporción o porcentaje de la frecuencia de una variable respecto de la cantidad total de datos. Se calcula dividiendo la frecuencia absoluta de una variable entre el número total de datos.',
            formula: '\\(f_r = \\frac{f_i}{n}\\)'
        },
        {
            id: 'frecuencia-relativa-acumulada-info',
            title: 'Frecuencia relativa acumulada (\\(F_r\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística#Frecuencia_relativa_acumulada" target="blank" class="hover:text-cyan-400">frecuencia relativa acumulada</a></b> de una variable es la suma de su frecuencia relativa y la frecuencia relativa acumulada de la variable anterior.',
            formula: '\\(F_r = f_i+F_{r(i-1)}\\)'
        },
        {
            id: 'frecuencia-relativa-porcentual-info',
            title: 'Frecuencia relativa porcentual (\\(f_r\\%\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Distribución_de_frecuencias#Frecuencia_relativa_porcentual" target="blank" class="hover:text-cyan-400">frecuencia relativa porcentual</a></b> corresponde a la frecuencia relativa expresada en forma porcentual. Se calcula multiplicando la frecuencia relativa por 100.',
            formula: '\\(f_r\\% = f_{r(i) \\cdot 100}\\)'
        },
        {
            id: 'frecuencia-relativa-porcentual-acumulada-info',
            title: 'Frecuencia relativa porcentual acumulada (\\(F_r\\%\\))',
            text: 'La <b>frecuencia relativa porcentual acumulada</b> es la suma de la frecuencia relativa porcentual y la frecuencia relativa porcentual acumulada anterior.',
            formula: '\\(F_r\\% = f_{r(i)}+F_{r(i-1)}\\)'
        },
        {
            id: 'media-arimetica-info',
            title: 'Media arimética (\\(\\bar{x}\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Media_aritmética" target="blank" class="hover:text-cyan-400">media arimética</a></b> es el cociente entre la suma de todos los datos (producto entre la variable y su frecuencia) y la cantidad total de datos.',
            formula: '\\(\\bar{x} = \\frac{\\sum_{i=1}^{n}f_i \\cdot x_i}{n}\\)'
        },
        {
            id: 'varianza-info',
            title: 'Varianza (\\(\\sigma^2\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Varianza" target="blank" class="hover:text-cyan-400">varianza</a></b> representa la dispersión o variabilidad de un conjunto de datos con respecto a su media arimética. Indica cuándo se alejan los valores individuales del promedio y proporciona una medida de qué tan dispersos están los datos alrededor de su valor central. El cálculo de la varianza corresponde al cociente entre la sumatoria del producto entre la frecuencia absoluta y el cuadrado de la variable y la cantidad total de datos menos el cuadrado de la media arimética.',
            formula: '\\(\\sigma^2 = \\frac{\\sum_{i=1}^{n}f_i \\cdot x_i^2}{n}-\\bar{x}^2\\)'
        },
        {
            id: 'desviacion-estandar-info',
            title: 'Desviación estándar (\\(\\sigma\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Desviación_típica" target="blank" class="hover:text-cyan-400">desviación estándar</a></b> representa la dispersión o variabilidad de un conjunto de datos con respecto a su media arimética. Al igual que la varianza, la desviación estándar proporciona una medida de qué tan dispersos están los datos alrededor de su valor central. La desviación estándar corresponde a la raíz cuadrada de la varianza.',
            formula: '\\(\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n}f_i \\cdot x_i^2}{n}-\\bar{x}^2}\\)'
        },
    ],
    groupedData: [
        {
            id: 'n-info',
            title: 'Cantidad datos (\\(n\\))',
            text: 'La letra \\(n\\) corresponde a la cantidad total de datos',
            formula: null
        },
        {
            id: 'marca-de-clase-info',
            title: 'Marca de clase (\\(x\\))',
            text: 'La <b><a href="#" target="blank" class="hover:text-cyan-400">marca de clase</a></b> representa el valor central o el valor representativo de cada intervalo.',
            formula: '\\(\\frac{Li_i+Ls_i}{2}\\)'
        },
        {
            id: 'frecuencia-absoluta-info',
            title: 'Frecuencia absoluta (\\(f\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística" target="blank" class="hover:text-cyan-400">frecuencia absoluta</a></b> es la cantidad de ocurrencia de un dato en un intervalo.',
            formula: null
        },
        {
            id: 'frecuencia-absoluta-acumulada-info',
            title: 'Frecuancia absoluta acumulada (\\(F\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística#Frecuencia_absoluta_acumulada" target="blank" class="hover:text-cyan-400">frecuencia absoluta acumulada</a></b> de un dato es la suma de su frecuencia absoluta y la frecuencia absoluta acumulada del dato anterior.',
            formula: '\\(F = f_i+F_{i-1}\\)'
        },
        {
            id: 'frecuencia-relativa-info',
            title: 'Frecuencia relativa (\\(f_r\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística#Frecuencia_relativa" target="blank" class="hover:text-cyan-400">frecuencia relativa</a></b> representa la proporción o porcentaje de la frecuencia de un dato respecto de la cantidad total de datos. Se calcula dividiendo la frecuencia absoluta de una dato entre el número total de datos.',
            formula: '\\(f_r = \\frac{f_i}{n}\\)'
        },
        {
            id: 'frecuencia-relativa-acumulada-info',
            title: 'Frecuencia relativa acumulada (\\(F_r\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Frecuencia_estadística#Frecuencia_relativa_acumulada" target="blank" class="hover:text-cyan-400">frecuencia relativa acumulada</a></b> de un dato es la suma de su frecuencia relativa y la frecuencia relativa acumulada del dato anterior.',
            formula: '\\(F_r = f_i+F_{r(i-1)}\\)'
        },
        {
            id: 'frecuencia-relativa-porcentual-info',
            title: 'Frecuencia relativa porcentual (\\(f_r\\%\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Distribución_de_frecuencias#Frecuencia_relativa_porcentual" target="blank" class="hover:text-cyan-400">frecuencia relativa porcentual</a></b> corresponde a la frecuencia relativa expresada en forma porcentual. Se calcula multiplicando la frecuencia relativa por 100.',
            formula: '\\(f_r\\% = f_{r(i) \\cdot 100}\\)'
        },
        {
            id: 'frecuencia-relativa-porcentual-acumulada-info',
            title: 'Frecuencia relativa porcentual acumulada (\\(F_r\\%\\))',
            text: 'La <b>frecuencia relativa porcentual acumulada</b> es la suma de la frecuencia relativa porcentual y la frecuencia relativa porcentual acumulada anterior.',
            formula: '\\(F_r\\% = f_{r(i)}+F_{r(i-1)}\\)'
        },
        {
            id: 'media-arimetica-info',
            title: 'Media arimética (\\(\\bar{x}\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Media_aritmética" target="blank" class="hover:text-cyan-400">media arimética</a></b> es el cociente entre la suma de todos los datos (producto entre la marca de clase y su frecuencia) y la cantidad total de datos.',
            formula: '\\(\\bar{x} = \\frac{\\sum_{i=1}^{n}f_i \\cdot x_i}{n}\\)'
        },
        {
            id: 'varianza-info',
            title: 'Varianza (\\(\\sigma^2\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Varianza" target="blank" class="hover:text-cyan-400">varianza</a></b> representa la dispersión o variabilidad de un conjunto de datos con respecto a su media arimética. Indica cuándo se alejan los valores individuales del promedio y proporciona una medida de qué tan dispersos están los datos alrededor de su valor central. El cálculo de la varianza corresponde al cociente entre la sumatoria del producto entre la frecuencia absoluta y el cuadrado de la marca de clase y la cantidad total de datos menos el cuadrado de la media arimética.',
            formula: '\\(\\sigma^2 = \\frac{\\sum_{i=1}^{n}f_i \\cdot x_i^2}{n}-\\bar{x}^2\\)'
        },
        {
            id: 'desviacion-estandar-info',
            title: 'Desviación estándar (\\(\\sigma\\))',
            text: 'La <b><a href="https://es.wikipedia.org/wiki/Desviación_típica" target="blank" class="hover:text-cyan-400">desviación estándar</a></b> representa la dispersión o variabilidad de un conjunto de datos con respecto a su media arimética. Al igual que la varianza, la desviación estándar proporciona una medida de qué tan dispersos están los datos alrededor de su valor central. La desviación estándar corresponde a la raíz cuadrada de la varianza.',
            formula: '\\(\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n}f_i \\cdot x_i^2}{n}-\\bar{x}^2}\\)'
        },
    ]
}