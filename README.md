# NailFlow - GitHub Pages + Agenda

Site estatico para manicure/nail designer mostrar procedimentos, valores, fotos
e permitir agendamento sem criar um servidor proprio.

## Como funciona

- A cliente acessa o link do GitHub Pages.
- Ela ve procedimentos, valores, fotos e botoes de WhatsApp.
- Ela agenda pelo calendario embutido na pagina.
- O sistema de agenda bloqueia horarios ocupados quando conectado ao seu
  calendario.

Esse modelo mantem o site simples no GitHub Pages e deixa a parte critica de
disponibilidade com um servico proprio de agendamento.

## Configurar a agenda

Use Cal.com ou Calendly.

1. Crie uma conta.
2. Conecte seu Google Calendar ou Outlook.
3. Defina seus dias e horarios de atendimento.
4. Crie um tipo de agendamento, por exemplo `Atendimento Nail Designer`.
5. Adicione uma pergunta para a cliente escolher o procedimento desejado.
6. Copie o link publico da agenda, por exemplo:

```txt
https://cal.com/seu-usuario/atendimento
```

## Rodar localmente

Crie um `.env` baseado em `.env.example`:

```txt
VITE_BUSINESS_NAME=Sarah Martins Nail Designer
VITE_BUSINESS_SUBTITLE=Alongamento • Gel • Nail Art
VITE_BUSINESS_CITY=Uberlandia - MG
VITE_BUSINESS_RATING=5,0
VITE_WHATSAPP_NUMBER=553491257487
VITE_SCHEDULING_URL=https://cal.com/seu-usuario/atendimento
```

Depois rode:

```bash
npm install
npm run dev
```

## Validar

```bash
npm run lint
npm run build
```

## Subir para o GitHub

```bash
git init
git add .
git commit -m "Initial NailFlow static site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/nailflow.git
git push -u origin main
```

## Ativar GitHub Pages

1. Abra o repositorio no GitHub.
2. Va em `Settings`.
3. Va em `Pages`.
4. Em `Build and deployment`, escolha `GitHub Actions`.
5. Va em `Settings` > `Secrets and variables` > `Actions` > `Variables`.
6. Adicione:

```txt
VITE_BUSINESS_NAME
VITE_BUSINESS_SUBTITLE
VITE_BUSINESS_CITY
VITE_BUSINESS_RATING
VITE_WHATSAPP_NUMBER
VITE_SCHEDULING_URL
```

7. Va em `Actions`.
8. Rode o workflow `Deploy to GitHub Pages`, ou faca um novo `git push`.

O link final fica parecido com:

```txt
https://SEU_USUARIO.github.io/nailflow/
```

## Importante

Um site estatico no GitHub Pages nao consegue bloquear horarios sozinho, porque
ele nao tem banco de dados nem servidor. Para evitar dois agendamentos no mesmo
horario, use a agenda conectada ao Google Calendar ou Outlook.
