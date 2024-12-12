const newsContainer = document.getElementById('main')
const mainStory = document.getElementById('LP')
const mainPicture = document.getElementById('mainImage')
const Descs = document.getElementById('descriptions')
const pic2 = document.getElementById('mainpic2')
const pic3 = document.getElementById('mainpic3')
const pic2Desc = document.getElementById('pic2-desc')
const pic3Desc = document.getElementById('pic3-desc')



async function getNews() {


  const url = 'https://cr-news-api-service.prd.crunchyrollsvc.com/v1/en-US/stories/search?category=Announcements,News&page_size=20&page=5'
  const corsProxyUrl = 'https://corsproxy.io/?'


  const response = await fetch(corsProxyUrl + url)
  const data = await response.json();
  const link1 = document.createElement('a')
  const link2 = document.createElement('a')



  linkForPic1 = data.stories[11].slug
  linkForPic2 = data.stories[19].slug

  link1.href = `https://www.google.com/search?q=${encodeURIComponent(linkForPic1)}`;
  link2.href = `https://www.google.com/search?q=${encodeURIComponent(linkForPic2)}`;
  link1.target = '_blank'
  link2.target = '_blank'
  console.log(data)

  function linkToNewTab(url) {
    window.open(url, '_blank');  // Opens the link in a new tab
  }

  pic2.src = data.stories[11].content.thumbnail.filename
  pic3.src = data.stories[19].content.thumbnail.filename

  pic2Desc.textContent = data.stories[1].content.headline
  pic3Desc.textContent = data.stories[2].content.headline

  pic2.classList.add('news-image2')
  pic3.classList.add('news-image2')
  pic2Desc.classList.add('descriptions2')
  pic3Desc.classList.add('descriptions2')

  pic2.onclick = () => {
    linkToNewTab(link1)
  }
  pic3.onclick = () => {
    linkToNewTab(link2)
  }

  data.stories.forEach(newsItem => {

    const newsCard = document.createElement('div')
    const picture = document.createElement('img')
    const desc = document.createElement('p')

    newsCard.classList.add('news-card')


    const mainPic = newsItem.content.thumbnail.filename
    const mainDesc = newsItem.content.headline
    const link = newsItem.slug
    const mainLink = document.createElement('a')

    mainLink.href = mainLink.href = `https://www.google.com/search?q=${encodeURIComponent(link)}`;

    picture.src = mainPic
    desc.textContent = mainDesc

    picture.style.width = '100%'

    picture.classList.add('news-image')
    desc.classList.add('descriptions2')
    mainLink.target = '_blank'

    newsCard.appendChild(picture)
    newsCard.appendChild(desc)
    newsContainer.appendChild(mainLink)
    mainLink.appendChild(newsCard)

  });





}

async function getStory() {


  const url = 'https://cr-news-api-service.prd.crunchyrollsvc.com/v1/en-US/stories/search?category=Announcements,News&page_size=1&page=5'
  const corsProxyUrl = 'https://corsproxy.io/?'

  const response = await fetch(corsProxyUrl + url)
  const data = await response.json();
  const link = document.createElement('a')
  linkForPic1 = data.stories[0].slug
  link.href = `https://www.google.com/search?q=${encodeURIComponent(linkForPic1)}`;


  const mainPic = data.stories[0].content.thumbnail.filename
  const mainDesc = data.stories[0].content.headline
  mainPicture.classList.add('mainpicture')
  mainPicture.src = mainPic
  Descs.textContent = mainDesc

  function linkToNewTab(url) {
    window.open(url, '_blank');  // Opens the link in a new tab
  }
  mainPicture.onclick = () => {
    linkToNewTab(link)
  }

  



}




getNews()
getStory()