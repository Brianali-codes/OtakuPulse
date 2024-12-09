const newsContainer = document.getElementById('main')
const mainStory = document.getElementById('LP')
const mainPicture = document.getElementById('mainImage')
const Descs = document.getElementById('descriptions')
const pic2 = document.getElementById('mainpic2')
const pic3 = document.getElementById('mainpic3')
const pic2Desc = document.getElementById('pic2-desc')
const pic3Desc = document.getElementById('pic3-desc')



async function getNews(){


    const url = 'https://cr-news-api-service.prd.crunchyrollsvc.com/v1/en-US/stories/search?category=Announcements,News,News&page_size=20&page=2'
    const corsProxyUrl = 'https://corsproxy.io/?'
    

    const response = await fetch( corsProxyUrl + url )
    const data = await response.json();
    
    console.log(data)
    data.stories.forEach(newsItem => {
        console.log(newsItem);
        console.log(newsItem.content);



        const newsCard = document.createElement('div')
        const picture = document.createElement('img')
        const desc = document.createElement('p')

        newsCard.classList.add('news-card')
        

        const mainPic = newsItem.content.thumbnail.filename
        const mainDesc = newsItem.content.headline

        
        picture.src = mainPic
        desc.textContent = mainDesc

        picture.classList.add('news-image')
        desc.classList.add('descriptions2')


        newsCard.appendChild(picture)
        newsCard.appendChild(desc)

        newsContainer.appendChild(newsCard)

    });

    
    


}

async function getStory(){


  const url = 'https://cr-news-api-service.prd.crunchyrollsvc.com/v1/en-US/stories/search?category=Announcements,News,News&page_size=1&page=1'
  const corsProxyUrl = 'https://corsproxy.io/?'


  const response = await fetch( corsProxyUrl + url )
  const data = await response.json();
  const mainPic = data.stories[0].content.thumbnail.filename
  const mainDesc = data.stories[0].content.headline

  mainPicture.src = mainPic
  Descs.textContent = mainDesc
  pic2.src = data.stories[1].content.thumbnail.filename
  pic3.src = data.stories[2].content.thumbnail.filename
  pic2Desc.textContent = data.stories[1].content.headline
  pic3Desc.textContent = data.stories[2].content.headline
  pic2.classList.add('news-image2')
  pic3.classList.add('news-image2')
  pic2Desc.classList.add('descriptions2')
  pic3Desc.classList.add('descriptions2')
  

}




getNews()
getStory()