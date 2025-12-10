# Configuração de Anexo de Imagem no EmailJS

## ⚠️ Passos Obrigatórios

Para que a imagem seja exibida como **anexo visual** no email (e não como texto bruto), você precisa configurar o template no EmailJS Dashboard.

### 1. Acesse o EmailJS Dashboard

- Vá para: https://dashboard.emailjs.com/
- Entre com suas credenciais

### 2. Abra seu Template

- Clique em **Email Templates**
- Selecione o template: `template_6vsho93`
- Abra o editor

### 3. Adicione o Anexo Dinâmico

1. Clique na aba **Attachments**
2. Clique em **Add Attachment**
3. Configure como segue:

#### Configuração do Anexo:

- **Attachment Type:** `Variable Attachment` ✓
- **Filename:** `imagem.png` (ou use a variável `{{attachment_name}}`)
- **Content Type:** `PNG` (ou `JPEG` conforme necessário)
- **Parameter Name:** `attachment` ✓

⚠️ **IMPORTANTE:** O `Parameter Name` DEVE ser exatamente `attachment` (sem hífen) para coincidir com o código do formulário.

### 4. Template HTML (Exemplo)

Adicione no corpo do email algo como:

```html
<p>Olá {{from_name}},</p>
<p>Sua solicitação foi recebida com sucesso!</p>

<h3>Dados do Formulário:</h3>
<ul>
  <li><strong>Telefone:</strong> {{phone}}</li>
  <li><strong>Categoria:</strong> {{category}}</li>
  <li><strong>Item:</strong> {{item}}</li>
  <li><strong>Quantidade:</strong> {{quantity}}</li>
  <li><strong>Mensagem:</strong> {{message}}</li>
</ul>

<p><strong>Imagem anexada:</strong> {{attachment_name}}</p>
```

### 5. Variáveis Disponíveis no Código

O formulário envia os seguintes parâmetros:

```javascript
{
  from_name: "Nome do Cliente",      // {{from_name}}
  phone: "(11) 99999-9999",          // {{phone}}
  category: "Copos",                 // {{category}}
  item: "item_a",                    // {{item}}
  quantity: "5",                     // {{quantity}}
  message: "Mensagem adicional",     // {{message}}
  attachment: "data:image/png;base64,...", // ANEXO (automático)
}
```

### ✅ Resultado Final

Após configurar corretamente:

- A imagem será anexada como um **arquivo de imagem real** (PNG, JPG, etc.)
- Aparecerá como **anexo do email** (não em linha)
- Será uma **imagem clicável e baixável** no email

---

## 🔧 Troubleshooting

**Problema:** A imagem não aparece como anexo

- ✓ Verifique se o `Parameter Name` é exatamente `attachment`
- ✓ Certifique-se de ter salvo o template após adicionar o anexo

**Problema:** Imagem aparece como texto base64

- ✓ Significa que o anexo no template não foi configurado
- ✓ Repita os passos 3 e 4 acima

**Problema:** "Falha ao enviar mensagem"

- ✓ Verifique se o `VITE_EMAILJS_TEMPLATE_ID` no `.env` está correto
- ✓ Confira se o template existe no dashboard

---

## 📝 Nota

O código do formulário já está pronto para enviar a imagem. Você APENAS precisa configurar o anexo no template do EmailJS para que funcione completamente.
