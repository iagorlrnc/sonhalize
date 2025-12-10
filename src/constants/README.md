// Guia de Uso das Variáveis de Cores

/\*\*

- Arquivo: src/constants/colors.ts
-
- Esse arquivo centraliza todas as cores da aplicação.
- Importar assim:
-
- import { colors } from '../constants/colors'
-
- Cores disponíveis:
- - colors.primary: '#474842' (Cinza escuro - textos principais)
- - colors.secondary: '#848884' (Cinza médio - botões, acentos)
- - colors.light: '#bbbbb7' (Cinza claro - bordas, ícones)
- - colors.background: '#f8f8f6' (Fundo claro)
- - colors.white: '#ffffff' (Branco puro)
- - colors.black: '#000000' (Preto puro)
- - colors.success: '#22c55e' (Verde para sucesso)
- - colors.error: '#ef4444' (Vermelho para erro)
- - colors.warning: '#f59e0b' (Amarelo para alerta)
- - colors.overlay: 'rgba(...)' (Overlay escuro)
- - colors.gradientDark: 'rgba(...)' (Gradiente escuro)
- - colors.gradientMed: 'rgba(...)' (Gradiente médio)
- - colors.white80: 'rgba(...)' (Branco com transparência 80%)
- - colors.white90: 'rgba(...)' (Branco com transparência 90%)
- - colors.whiteHalf: 'rgba(...)' (Branco com transparência 50%)
- - colors.red400: '#ef5350' (Vermelho para ícones)
-
-
- EXEMPLOS DE USO:
-
- 1.  Em componentes React:
-
- <div style={{ color: colors.primary }}>Texto</div>
- <button style={{ backgroundColor: colors.secondary }}>Botão</button>
- <input style={{ borderColor: colors.light }} />
-
-
- 2.  Em tailwind classes (através de estilos inline):
-
- <div style={{ backgroundColor: colors.background }}>...</div>
-
-
- VANTAGENS DE USAR VARIÁVEIS:
-
- ✅ Mudança de tema em um único lugar
- ✅ Consistência de cores em toda a aplicação
- ✅ Facilita manutenção futura
- ✅ Reduz bugs relacionados a cores inconsistentes
- ✅ Melhor organização do código
  \*/

export const colors = {
// Cores principais
primary: '#474842', // Cinza escuro (textos principais)
secondary: '#848884', // Cinza médio (botões, acentos)
light: '#bbbbb7', // Cinza claro (bordas, ícones)
background: '#f8f8f6', // Fundo claro
white: '#ffffff', // Branco puro
black: '#000000', // Preto puro

// Cores de estados
success: '#22c55e', // Verde para sucesso
error: '#ef4444', // Vermelho para erro
warning: '#f59e0b', // Amarelo para alerta

// Cores de sobreposição
overlay: 'rgba(71, 72, 66, 0.7)', // Overlay escuro
gradientDark: 'rgba(0, 0, 0, 0.8)', // Gradiente escuro
gradientMed: 'rgba(0, 0, 0, 0.4)', // Gradiente médio
white80: 'rgba(255, 255, 255, 0.8)', // Branco com transparência 80%
white90: 'rgba(255, 255, 255, 0.9)', // Branco com transparência 90%
whiteHalf: 'rgba(255, 255, 255, 0.5)', // Branco com transparência 50%
red400: '#ef5350', // Vermelho para ícones

// Estados de hover
hoverOpacity: 0.7,
};

export default colors;
