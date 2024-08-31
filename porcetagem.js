// Valores de faturamento por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Cálculo do faturamento total
const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

// Cálculo do percentual de representação de cada estado
const percentuais = {};
for (let estado in faturamentoEstados) {
    percentuais[estado] = (faturamentoEstados[estado] / faturamentoTotal) * 100;
}

// Exibindo os resultados
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
