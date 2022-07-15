# **Markdown Previewer 🚀**

- This app convert `markdown` to `html` & logic can be used to render `blogs` written in `markdown`.
- Project support `custom component` by modifying default sanitizing schema of `rehypeSanitize`.

![Untitled](https://raw.githubusercontent.com/akash-aman/markdown_previewer/main/images/img1.png)

## **Idea about building this Project**

- My curiosity 🤓 about markdown❤️ made this project. 
- I was just searching for a full fledged secured🔐 Solution for bringing markdown from server and rendering into HTML.
- As i seen some of package 📦 support only few markdown format and other do not have support for plugin🔌 to bring those features.
- features like fully custom component, math ➗ equations support, mermaid code to diagram 💎 support were missing due to security issues. 
- I have tried to implement all features 🎉. and also sanatized🔫 converted html before render.


## Run with Docker Compose

- First Create my_network  

```
docker network create my_network
```


### Development build with docker compose

- Run Container 

```
docker-compose -f .\docker-compose.dev.yml up -d
```

- Stop Container

```
docker-compose -f .\docker-compose.dev.yml down
```

### Production build with docker compose 

- Run Container 

```
docker-compose -f .\docker-compose.prod.yml up -d
```

- Stop Container

```
docker-compose -f .\docker-compose.prod.yml down
```


## How to run 

- Installing pnpm 
```
    npm install -g pnpm
```
- Installing pnpm dependencies
```
    pnpm install 
```
- Run in Development Mode  
```
    pnpm run dev
```
- Run in Production Mode 
```
    pnpm run build
    pnpm run start
```

## Image


![Untitled](https://raw.githubusercontent.com/akash-aman/markdown_previewer/main/images/img2.png)

![Untitled](https://raw.githubusercontent.com/akash-aman/markdown_previewer/main/images/img3.png)


