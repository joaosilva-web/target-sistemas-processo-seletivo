🔗 Teste Técnico - Target Sistemas

Este projeto contém a resolução de um teste técnico da Target Sistemas. Ele inclui cinco questões abordando lógica de programação, manipulação de strings, sequência de Fibonacci e análise de dados com JSON.

📌 Funcionalidades

O projeto apresenta soluções para as seguintes questões:
	1.	Cálculo de soma sequencial
	•	Um algoritmo que soma os números de 1 a 13.
	2.	Verificação de número na sequência de Fibonacci
	•	Um formulário permite ao usuário inserir um número e verificar se ele pertence à sequência de Fibonacci.
	3.	Análise de faturamento diário
	•	Lê um arquivo JSON contendo os faturamentos diários de uma distribuidora e calcula:
	•	O menor valor de faturamento em um dia do mês.
	•	O maior valor de faturamento em um dia do mês.
	•	Quantos dias tiveram faturamento superior à média mensal.
	4.	Percentual de faturamento por estado
	•	Com base em um arquivo JSON, calcula o percentual de faturamento de cada estado dentro do faturamento total.
	5.	Inversão de strings
	•	O usuário pode inserir um texto em um formulário, e o programa retornará a string invertida.

🚀 Como rodar o projeto

1️⃣ Acesse online

O projeto está hospedado e pode ser acessado diretamente pelo link:
🔗 Target Sistemas - Teste Técnico

2️⃣ Rodar localmente

✅ Requisitos

Para executar este projeto localmente, você precisa de:
	•	Um navegador atualizado (Chrome, Firefox, Edge, etc.).
	•	Um servidor web local para servir os arquivos JSON corretamente (como o Live Server do VS Code ou o Python HTTP Server).

🔧 Passo a passo
	1.	Baixe ou clone o repositório:

git clone https://github.com/seu-usuario/teste-target.git
cd teste-target


	2.	Abra o arquivo index.html em um navegador
	•	Se quiser testar as funcionalidades que carregam arquivos JSON, execute um servidor local:
Usando Python (caso tenha instalado):

python -m http.server

	•	Depois, acesse http://localhost:8000 no navegador.
Ou usando a extensão “Live Server” no VS Code:
	•	Clique com o botão direito no index.html e selecione “Open with Live Server”.

🛠️ Tecnologias utilizadas
	•	HTML5 - Estrutura da página
	•	CSS3 - Estilização da interface
	•	JavaScript (ES6) - Lógica e manipulação de DOM
	•	JSON - Dados para faturamento diário e percentual por estado

📁 Estrutura do projeto

/teste-target
│── /dados.json                 # Dados de faturamento diário
│── /faturamentosDistribuidora.json # Dados de faturamento por estado
│── /index.html                 # Página principal com todas as resoluções
│── /index.js                   # Lógica JavaScript para as funcionalidades
│── /styles.css                 # Estilos da aplicação (opcional, se necessário)
└── /README.md                  # Documentação do projeto

📝 Considerações finais

Este projeto demonstra habilidades em lógica de programação, manipulação de dados, interação com o usuário e uso de JSON.

Sinta-se à vontade para sugerir melhorias ou adaptar para outros desafios! 🚀
