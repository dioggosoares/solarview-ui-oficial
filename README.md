<img src="https://my.solarview.com.br/uploads/usersLogos/solarview.png?=1664501133" width="128" align="right" />

# Solarview UI

Solarview UI, uma biblioteca projetada para adicionar um padrão mais elegante ao portal Solarview. Explore todos os componentes em [Github Pages - Solarview UI](https://dioggosoares.github.io/solarview-ui-oficial).

[![NPM](https://img.shields.io/npm/v/@solarview-ui/core?style=flat-square)](https://www.npmjs.com/package/@solarview-ui/core) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://standardjs.com) [![License](https://img.shields.io/npm/l/uicons-react?style=flat-square)](https://github.com/u-icons/react/blob/main/LICENSE)
<!-- 
[![GitHub stars](https://img.shields.io/github/stars/u-icons/react?color=%237C3AED&style=flat-square)](https://github.com/u-icons/react)
[![Follow on GitHub](https://img.shields.io/github/followers/u-icons?color=%237C3AED&style=flat-square)](https://github.com/u-icons)
[![GitHub forks](https://img.shields.io/github/forks/u-icons/react?color=%2314B8A6&style=flat-square)](https://github.com/u-icons/react/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/u-icons/react?color=%2314B8A6&style=flat-square)](https://github.com/u-icons/react) -->

## Instalação dos componentes 

```bash
yarn add @solarview-ui/core
```

or

```bash
npm install @solarview-ui/core
```

## Instalação dos tokens (colors, fontSize, fontWeight, etc.)

```bash
yarn add @solarview-ui/tokens
```

or

```bash
npm install @solarview-ui/tokens
```

## Como usar

Basta importar os componentes necessários e adicioná-los no componente ou na página.

```tsx
import { Button, Close, Modal, TagIcon, Plus, TextInput, Trash } from "@solarview-ui/core";
import { colors } from "@solarview-ui/tokens";

export function Component(){
  return (
    <div>
      <Modal
        hasHeader // => diz para o modal que terá um HEADER (adicionando também um botão para fechar o modal)
        title="Tags" // não necessário caso não tenha um HEADER
        closeIcon={<Close />} // não necessário caso não tenha um HEADER
        content={ // conteúdo do body do Modal, podendo também adicionar um footer ao final
          <div>
            <Text size="md" weight="normal">
              Adicione ou remova Tags para agrupar usinas.
            </Text>

            <div id="body">
              <div>
                <TextInput
                  label="Tag 1"
                  placeholder="tag1"
                />
                <Button
                  variant="tertiary"
                  size="sm"
                  aspect="compress"
                >
                  <Trash size={16} color={colors.feedbackDanger} />
                </Button>
              </div>

              <div>
                <TextInput
                  label="Tag 2"
                  placeholder="tag2"
                />
                <Button
                  variant="tertiary"
                  size="sm"
                  aspect="compress"
                >
                  <Trash size={16} color={colors.feedbackDanger} />
                </Button>
              </div>

              <Button variant="tertiary" size="sm">
                <Plus size={10} />
                Criar nova Tag
              </Button>
            </div>

            <footer>
              <Button variant="quaternary" size="md">
                Cancelar
              </Button>
              <Button variant="primary" size="md">
                Salvar
              </Button>
            </footer>
          </div>
        }
      >
        // Passa o botão que vai acionar o modal como filho do componente
        <Button variant="secondary">
          <TagIcon size={16} />
          Tags
        </Button>
      </Modal>
    </div>
  );
};
```

## CSS

Todos os tipos de escrita CSS são suportados, se você precisar adicionar CSS diretamente ao componente, classNames, estilos inline e nomes de classes utilitárias CSS, por exemplo, classes utilitárias vindas do framework Tailwind CSS:

```tsx
import { Box } from "@solarview-ui/core";

export function Component(){
  return (
    <div>
      <Box style={{ color: '#fac800' }} />
      <Box className="text-green-500" variant="secondary" borderStyle="pointed" /> // Tailwind utility class
      <Box className="classic-element-class" variant="tertiary" />
    </div>
  );
};
```

### Licença

MIT © [Solarview UI](https://dioggosoares.github.io/solarview-ui-oficial)