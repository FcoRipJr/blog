# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





```


<?php
// Diretório onde os arquivos serão armazenados
$dir = "evidencias/";

// Tamanho máximo do arquivo (em bytes)
$tamanho_maximo = 1048576; // 1 MB

// Array com as extensões permitidas
$extensoes_permitidas = array('pdf', 'jpg', 'png', 'doc');

// Verifica se um arquivo foi enviado
if (!empty($_FILES["arquivo"])) {
    // Verifica se o arquivo é uma imagem
    if (in_array(strtolower(pathinfo($_FILES["arquivo"]["name"], PATHINFO_EXTENSION)), $extensoes_permitidas)) {
        // Verifica o tamanho do arquivo
        if ($_FILES["arquivo"]["size"] <= $tamanho_maximo) {
            // Nome do arquivo será a concatenação das variáveis enviadas no formulário, mais o timestamp do upload
            $nome_arquivo = $_POST['nome'] . '_' . $_POST['sobrenome'] . '_' . time() . '.' . pathinfo($_FILES["arquivo"]["name"], PATHINFO_EXTENSION);

            // Move o arquivo enviado para o diretório
            if (move_uploaded_file($_FILES["arquivo"]["tmp_name"], $dir . $nome_arquivo)) {
                echo "Arquivo enviado com sucesso.";
            } else {
                echo "Erro ao enviar o arquivo.";
            }
        } else {
            echo "Tamanho máximo permitido é de " . ($tamanho_maximo / 1048576) . " MB.";
        }
    } else {
        echo "Formato de arquivo não permitido. Os formatos permitidos são: " . implode(", ", $extensoes_permitidas) . ".";
    }
} else {
    echo "Nenhum arquivo enviado.";
}
?>
```