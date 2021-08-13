# Occasum
## A social network for sunset 🌅
[Link for the project](https://occasum.herokuapp.com/) (may have fallen due to heroku timeouts)<br>
[Link for Figma Design](https://www.figma.com/community/file/1007727681972409058) <br>
<img src="https://github.com/WasixXD/Occasum/blob/main/occasum/public/img/Sun_Flatline.png" />

# Brief 📖
For this project, I really wanted to test one of the numerous javascript frameworks and used the one that caught my attention Svelte, and after a few designs on Figma I came to Occasum ("Sunset" in English) a place where you can share your beautiful sunset photos.

<br>

# Challenges 🐢
- I never used a javascript framework before
- couldn't use MongoDB (it's what I'm most used to)
- Store images and memory

<br>

# Goals 🏆
[ x ] User can upload a photo<br>
[ x ] Other people can see the image <br>
[ x ] Use a framework<br>
[ x ] Work with other DataBase


<br>

# How it works? 💼
First, the person uploads an image, along with some information (author, date, and caption).
After that, the Server takes this information and store the image in Firebase Storage and saves the image link with the other data in Firebase Firestore.
And at the end, when /photos is accessed, the server sends the data by request and through Svelte everything is displayed.
<br>


PS: Front end really isn't for me
