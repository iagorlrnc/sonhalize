# Configuração do EmailJS

Para ativar o formulário de contato, siga estes passos:

## 1. Criar conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita

## 2. Configurar o serviço de e-mail

1. No dashboard do EmailJS, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de e-mail (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Copie o **Service ID**

## 3. Criar um template de e-mail

1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:
   - `{{from_name}}` - Nome do cliente
   - `{{phone}}` - Telefone do cliente
   - `{{category}}` - Categoria selecionada
   - `{{item}}` - Item desejado
   - `{{quantity}}` - Quantidade de itens
   - `{{reference_image}}` - Imagem de referência ou modelo (base64)
   - `{{message}}` - Mensagem adicional

Exemplo de template com renderização de imagem:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        color: #474842;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .info {
        margin: 15px 0;
      }
      .label {
        font-weight: bold;
        color: #474842;
      }
      .image-section {
        margin-top: 20px;
      }
      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Nova Solicitação de Aluguel - Requinte Noivas</div>

      <div class="info"><span class="label">Nome:</span> {{from_name}}</div>
      <div class="info"><span class="label">Telefone:</span> {{phone}}</div>

      <div class="info"><span class="label">Categoria:</span> {{category}}</div>
      <div class="info"><span class="label">Item Desejado:</span> {{item}}</div>
      <div class="info">
        <span class="label">Quantidade:</span> {{quantity}}
      </div>

      {{#if reference_image}}
      <div class="image-section">
        <div class="label">Imagem de Referência:</div>
        <img src="{{reference_image}}" alt="Referência do modelo" />
      </div>
      {{/if}}

      <div class="info" style="margin-top: 25px;">
        <span class="label">Mensagem Adicional:</span><br />
        {{message}}
      </div>
    </div>
  </body>
</html>
```

**Importante:**

- A variável `{{reference_image}}` contém o dados base64 da imagem enviada
- Use a sintaxe `{{#if reference_image}}...{{/if}}` para mostrar a imagem apenas se houver sido enviada
- A tag `<img src="{{reference_image}}" />` renderizará a imagem diretamente no email
- O template suporta HTML completo para melhor formatação do email

4. Copie o **Template ID**

## 4. Obter a Public Key

1. Vá em "Account" > "General"
2. Copie a **Public Key**

## 5. Configurar variáveis de ambiente

No arquivo `.env` (ou `.env.local`) da raiz do projeto, adicione as seguintes variáveis:

```
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_USER_ID=YOUR_PUBLIC_KEY
```

Substitua os valores pelos dados obtidos no EmailJS:

- `YOUR_SERVICE_ID` - Service ID obtido na etapa 2
- `YOUR_TEMPLATE_ID` - Template ID obtido na etapa 3
- `YOUR_PUBLIC_KEY` - Public Key obtida na etapa 4

## Pronto!

Após configurar:

1. O formulário enviará automaticamente as solicitações de aluguel para o e-mail configurado no EmailJS
2. As imagens de referência serão renderizadas diretamente no corpo do email
3. Todos os dados (nome, telefone, categoria, item, quantidade, mensagem e imagem) serão incluídos no email
