# Guia de Personalização - Requinte Noivas

## Como personalizar o site para seu negócio

### 1. Informações de Contato

Edite o arquivo `src/components/Contact.tsx` para atualizar:

- **Telefone**: Altere `(11) 99999-9999` para seu número
- **WhatsApp**: Atualize o link e número em `https://wa.me/5511999999999`
- **Instagram**: Substitua `@requintenoivas` pelo seu usuário
- **E-mail**: Altere `contato@requintenoivas.com.br`
- **Horário de funcionamento**: Ajuste os dias e horários

### 2. Localização e Mapa

Edite o arquivo `src/components/Location.tsx`:

#### Atualizar endereço:
```typescript
const address = "Seu endereço completo aqui";
```

#### Personalizar o mapa do Google Maps:

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque pelo endereço da sua loja
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código iframe
5. Substitua a URL no arquivo:

```typescript
const mapsUrl = "COLE_AQUI_A_URL_DO_IFRAME";
```

#### Link de direções:
```typescript
const directionsUrl = "https://www.google.com/maps/dir//SEU+ENDERECO+AQUI";
```

### 3. Imagens do Carrossel

Edite o arquivo `src/components/Carousel.tsx` para usar suas próprias fotos:

```typescript
const images = [
  {
    url: 'URL_DA_SUA_IMAGEM_1',
    title: 'Título',
  },
  // Adicione mais imagens...
];
```

**Dica**: Use imagens de alta qualidade (recomendado: 1920x1080px)

### 4. Catálogo de Produtos

Edite o arquivo `src/pages/CategoryPage.tsx` para adicionar seus produtos reais:

Para cada categoria (noivas, madrinhas, formatura, ternos), atualize:

```typescript
items: [
  {
    id: 1,
    name: 'Nome do Vestido/Terno',
    image: 'URL_DA_IMAGEM',
    description: 'Descrição detalhada',
  },
  // Adicione mais itens...
]
```

### 5. Texto da Seção Sobre

Edite o arquivo `src/components/About.tsx` para contar sua história:

- Altere o texto de apresentação
- Atualize a imagem de fundo (background)
- Personalize as cores e estilo

### 6. Configuração do EmailJS

Siga as instruções no arquivo `EMAILJS-SETUP.md` para ativar o formulário de contato.

### 7. Cores do Site

As cores principais estão definidas inline nos componentes. Para mudar:

- **#bbbbb7** - Cor secundária (cinza claro)
- **#474842** - Cor principal do texto (cinza escuro)
- **#848884** - Cor de destaque (verde acinzentado)

Você pode fazer uma busca global por essas cores e substituir pelos valores da sua paleta.

### 8. Fontes

O site usa:
- **Playfair Display** - Para títulos (fonte serif)
- **Inter** - Para textos (fonte sans-serif)

Para mudar, edite o arquivo `src/index.css` e atualize o @import do Google Fonts.

## Dicas para Melhores Resultados

1. **Imagens**: Use fotos profissionais de alta qualidade
2. **Otimização**: Comprima as imagens antes de usar (recomendado: TinyPNG ou Squoosh)
3. **Consistência**: Mantenha o mesmo estilo de fotos em todo o site
4. **Textos**: Seja claro e objetivo nas descrições
5. **Teste**: Sempre teste em diferentes dispositivos (celular, tablet, desktop)

## Suporte

Para dúvidas ou ajuda adicional, consulte:
- [Documentação React](https://react.dev/)
- [Documentação Tailwind CSS](https://tailwindcss.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
