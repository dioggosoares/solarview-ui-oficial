var u=Object.defineProperty;var r=(a,e)=>u(a,"name",{value:e,configurable:!0});import"./index.86aa1c90.js";import{c as o,A as p,M as m}from"./Props.a1c72db7.js";import"./jsx-runtime.7b302061.js";import"./iframe.6df6dec7.js";import"./string.2eed47e2.js";import"./index.37bb4dda.js";import"./es.map.constructor.aaaff74d.js";import"./es.number.to-fixed.0f17e7da.js";function i(){return i=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s])}return a},i.apply(this,arguments)}r(i,"_extends");const c={},d="wrapper";function l({components:a,...e}){return o(d,i({},c,e,{components:a,mdxType:"MDXLayout"}),o(m,{title:"Home",mdxType:"Meta"}),o("h1",null,"Solarview UI"),o("p",null,"Design System da Solarview"),o("h2",null,"Installation Components"),o("pre",null,o("code",{parentName:"pre",className:"language-bash"},`yarn add @solarview-ui/core
`)),o("p",null,"or"),o("pre",null,o("code",{parentName:"pre",className:"language-bash"},`npm install @solarview-ui/core
`)),o("h2",null,"Installation Tokens"),o("pre",null,o("code",{parentName:"pre",className:"language-bash"},`yarn add @solarview-ui/tokens
`)),o("p",null,"or"),o("pre",null,o("code",{parentName:"pre",className:"language-bash"},`npm install @solarview-ui/tokens
`)),o("h2",null,"Como usar"),o("p",null,"Basta importar os componentes necess\xE1rios e adicion\xE1-los no componente ou na p\xE1gina."),o("h3",null,"Usando o componente Modal"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { Button, Close, Modal, TagIcon, Plus, TextInput, Trash } from "@solarview-ui/core";
import { colors } from "@solarview-ui/tokens";

export function Component(){
  return (
    <div>
      <Modal
        hasHeader // => diz para o modal que ter\xE1 um HEADER (adicionando tamb\xE9m um bot\xE3o para fechar o modal)
        title="Tags" // n\xE3o necess\xE1rio caso n\xE3o tenha um HEADER
        closeIcon={<Close />} // n\xE3o necess\xE1rio caso n\xE3o tenha um HEADER
        content={ // conte\xFAdo do body do Modal, podendo tamb\xE9m adicionar um footer ao final
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
        // Passa o bot\xE3o que vai acionar o modal como filho do componente
        <Button variant="secondary">
          <TagIcon size={16} />
          Tags
        </Button>
      </Modal>
    </div>
  );
};
`)),o("h3",null,"Usando o componente Tabs"),o("img",{src:"https://raw.githubusercontent.com/dioggosoares/solarview-ui-oficial/main/packages/docs/public/tabs.png",align:"left"}),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { TabRoot, TabList, TabButton, TabContent, Box } from "@solarview-ui/core";

// IMPORTANTE: esse componente n\xE3o \xE9 mostrado no storybook

export function Component(){
  return (
    <div>
      <TabRoot defaultValue="tab1">// o defaultValue diz para o componente qual tab estar\xE1 ativa ao carregar
        <TabList>
          <TabButton value="tab1">
            <PowerPlant size={20} />
            Usina
          </TabButton>
          <TabButton value="tab2">
            <Chart size={20} />
            Dashboard
          </TabButton>
          <TabButton value="tab3">
            <Map size={20} />
            Mapa
          </TabButton>
        </TabList>

        // IMPORTANTE: o TabContent n\xE3o tem estiliza\xE7\xE3o nenhuma (css) ent\xE3o \xE9 necess\xE1rio criar um elemento
        // e estilizar ele de acordo com a necessidade, (pode ser usado o componente Box) como abaixo.
        <TabContent value="tab1">// tab ativa na propriedade defaultValue.
          <Box
            // aqui pode usar essa propriedade "css", "style", ou criar uma classe css no arquivo "css" externo
            css={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '.75rem',
              margin: '0 auto',
            }}
            color="backgroundGray" // pode definir a cor de fundo (cores dos Tokens), (o padr\xE3o \xE9 branco)
            borderStyle="pointed" // tipo dos cantos "pointed" ou "rounded"
            variant="quaternary" // variante com a cor da borda $neutralExtraLight
          >
            // Aqui vai todo o conte\xFAdo
          </Box>
        </TabContent>
        <TabContent value="tab2">
          <Conte\xFAdo/> // conte\xFAdo dentro da tab
        </TabContent>
        <TabContent value="tab3">
          <Conte\xFAdo/> // conte\xFAdo dentro da tab
        </TabContent>
      </TabRoot>
    </div>
  );
};
`)),o("h3",null,"Usando o componente Avatar"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { Avatar } from "@solarview-ui/core";

export function Component(){
  return (
    <div>
      // o padr\xE3o do avatar \xE9 receber uma imagem, mas se a imagem passada nao carregar
      // ou o "src" n\xE3o for passado ele mostra o fallback
      <Avatar src="https://api-v2.solarview.com.br/storage/images/logos/sices.png" />
      // o fallbackType existem 2 tipos, "icon" e "name", o icon seria usado o <User/> ou no
      // caso do padr\xE3o do style guide \xE9 usado o <NoImage />
      // no caso no "name" se voce passar por exemplo "Jo\xE3o Silva" o fallback mostra s\xF3 as iniciais
      <Avatar fallbackType="name" name="Jo\xE3o Silva" />
      // temos tamb\xE9m o typeData, que ser\xE1 "image" ou "text", se passar "text"
      // ai o avatar ser\xE1 mostrado como uma label que receber\xE1 como filho qualquer texto
      // esse \xFAltimo modo tem caso de uso para mostrar quantas usinas est\xE3o unificadas por exemplo
      <Avatar typeData="text">
        10
      </Avatar>
    </div>
  );
};
`)),o("h2",null,"Usando o componente IconButtonGroup (sem limites de bot\xF5es no grupo)"),o("h6",null,"IconButtonGroup"),o("img",{src:"https://raw.githubusercontent.com/dioggosoares/solarview-ui-oficial/main/packages/docs/public/icon-button-group.png",align:"left"}),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { IconButtonGroup, IconButton } from "@solarview-ui/core";

// IMPORTANTE: esse componente n\xE3o \xE9 mostrado no storybook, o IconButton sim

// esse componente n\xE3o tem estiliza\xE7\xE3o e n\xE3o deve ter, ele \xE9 100% funcional
// server para agrupar SOMENTE o bot\xE3o do tipo IconButton, de forma a deixar
// o primeiro e o \xFAltimo com bordas arredondadas (padr\xE3o proposto no style guide)

export function Component(){
  return (
    <div>
      <IconButtonGroup
        // a propriedade "orientation" padr\xE3o do IconButtonGroup \xE9 "horizontal"
        // se passar como vertical o grupo ser\xE1 alinhado verticalmente
        orientation="vertical"
      >
        // o "size" padr\xE3o \xE9 "sm", n\xE3o sendo necess\xE1rio
        // ser passado caso esse seja o tamanho necess\xE1rio
        // caso contr\xE1rio voce passar mais 2 op\xE7\xF5es "md" e "lg"
        <IconButton size="md">
          <Share />
        </IconButton>
        <IconButton size="md">
          <Share />
        </IconButton>
        <IconButton size="md">
          <Share />
        </IconButton>
        <IconButton size="md">
          <Share />
        </IconButton>
      </IconButtonGroup>
    </div>
  );
};
`)),o("h2",null,"Usando o componente ToggleGroup (somente grupos de 3 bot\xF5es)"),o("h6",null,'ToggleGroup type="simple"'),o("img",{src:"https://raw.githubusercontent.com/dioggosoares/solarview-ui-oficial/main/packages/docs/public/toggle-group-simple.png",align:"left"}),o("h6",null,'ToggleGroup type="multiple"'),o("img",{src:"https://raw.githubusercontent.com/dioggosoares/solarview-ui-oficial/main/packages/docs/public/toggle-group-multiple.png",align:"left"}),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { ToggleGroup, ToggleGroupItem } from "@solarview-ui/core";

// IMPORTANTE: esse componente n\xE3o \xE9 mostrado no storybook

// Este componente tem a proposta de ser usado em SOMENTE grupos de 3 buttons
// Um poss\xEDvel caso de uso seria a contru\xE7\xE3o de uma barra de ferramentas
// estilo formata\xE7\xE3o de documento, como grupo de alinhamento de texto
// Ex: um grupo de 3 botoes, um TextAlign-Left, TextAlign-Center, TextAlign-Right

export function Component(){
  return (
    <div>
      // o ToggleGroup recebe uma propriedade obrigat\xF3ria que o "type"
      // sendo "simple" ou "multiple", se for passado "simple" a funcionalidade toggle
      // ser\xE1 como um RadioButton ativa um e desativa o anterior
      // se passar "multiple" funciona como Checkbox
      // ativando um por um e desativando tamb\xE9m
      <ToggleGroup
        // a propriedade "orientation" padr\xE3o do ToggleGroup \xE9 "horizontal"
        // se passar como vertical o grupo ser\xE1 alinhado verticalmente
        type="simple"
        orientation="vertical"
      >
        // a propriedade "value" tamb\xE9m \xE9 obrigat\xF3ria
        // ele orienta o bot\xE3o nas funcionalidades do toggle no "simple" e "multiple"
        <ToggleGroupItem value="left" size="md">
          <Share />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" size="md">
          <Share />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" size="md">
          <Share />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
`)),o("h3",null,"Usando os tokens de cor"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { User } from "@solarview-ui/core";
import { colors } from "@solarview-ui/tokens";

export function Component(){
  return (
    <div>
      <User 
        // caso n\xE3o seja passado um size pra ele o padr\xE3o \xE9 16
        size={20}
        // passando a cor vermelha para o icone de Usu\xE1rio
        color={colors.feedbackDanger}
      />
    </div>
  );
};
`)),o("h2",null,"CSS"),o("p",null,"Todos os tipos de escrita CSS s\xE3o suportados, se voc\xEA precisar adicionar CSS diretamente ao componente, classNames, estilos inline e nomes de classes utilit\xE1rias CSS, por exemplo, classes utilit\xE1rias vindas do framework Tailwind CSS:"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { Box } from "@solarview-ui/core";

export function Component(){
  return (
    <div>
      <Box style={{ color: '#fac800' }} />
      <Box className="text-green-500" variant="secondary" borderStyle="pointed" /> // Tailwind utility class
      <Box className="classic-element-class" variant="tertiary" />
    </div>
  );
};
`)))}r(l,"MDXContent");l.isMDXComponent=!0;const g=r(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const t={title:"Home",includeStories:["__page"]},v={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>o(p,{mdxStoryNameToKey:v,mdxComponentAnnotations:t},o(l,null))};const w=["__page"];export{w as __namedExportsOrder,g as __page,t as default};
//# sourceMappingURL=Home.stories.6ff1899c.js.map
