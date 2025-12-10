# Requinte Noivas - Site Oficial

Site profissional para aluguel de trajes: vestidos de noiva, vestidos para madrinhas, vestidos de formatura e ternos.

## Características

- Design elegante e sofisticado
- Totalmente responsivo (funciona em celular, tablet e desktop)
- Carrossel automático de imagens
- Catálogo organizado por categorias
- Formulário de contato integrado com EmailJS
- Mapa do Google Maps incorporado
- Botão flutuante do WhatsApp
- Animações suaves e transições fluidas
- Paleta de cores personalizada

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Vite
- Lucide React (ícones)

## Estrutura do Site

1. **Seção Sobre** - Apresentação da loja com imagem de fundo elegante
2. **Carrossel** - Exibição automática de fotos dos trajes
3. **Catálogo** - Cards clicáveis para cada categoria
4. **Páginas de Categoria** - Catálogo completo com fotos e descrições
5. **Localização** - Mapa interativo do Google Maps
6. **Contato** - Telefone, WhatsApp, Instagram, e-mail e horários
7. **Formulário** - Solicitação de aluguel com envio automático via EmailJS

## Como Personalizar

Consulte os arquivos de guia:

- **PERSONALIZACAO.md** - Guia completo de personalização
- **EMAILJS-SETUP.md** - Instruções para configurar o formulário de contato

## Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 16 ou superior

### Instalar dependências
```bash
npm install
```

### Executar em modo de desenvolvimento
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Criar build de produção
```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`

## Personalização Rápida

### Alterar informações de contato
Edite o arquivo: `src/components/Contact.tsx`

### Atualizar endereço e mapa
Edite o arquivo: `src/components/Location.tsx`

### Modificar produtos do catálogo
Edite o arquivo: `src/pages/CategoryPage.tsx`

### Mudar número do WhatsApp
Edite os arquivos:
- `src/components/Contact.tsx`
- `src/components/WhatsAppButton.tsx`

### Configurar formulário de contato
Siga as instruções em `EMAILJS-SETUP.md`

## Paleta de Cores

- **#bbbbb7** - Cinza claro (elementos secundários)
- **#474842** - Cinza escuro (textos principais)
- **#848884** - Verde acinzentado (destaques e botões)

## Fontes

- **Playfair Display** - Títulos (serif)
- **Inter** - Textos (sans-serif)

## Suporte

Para personalização adicional ou dúvidas técnicas, consulte:
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- EmailJS: https://www.emailjs.com/

## Licença

Este site foi desenvolvido exclusivamente para a Requinte Noivas.
