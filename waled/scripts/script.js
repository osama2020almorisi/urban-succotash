// بيانات الفيديوهات (يمكنك تعديل هذه لتتناسب مع ملفات الفيديو الخاصة بك)
const videos = [
    { title: 'Sample Video 1', src: 'videos/sample1.mp4' },
    { title: 'Sample Video 2', src: 'videos/sample2.mp4' }
];

function displayVideos(videoList) {
    const resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = "";
    
    videoList.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video');
        
        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', true);
        videoElement.src = video.src;

        const titleElement = document.createElement('h2');
        titleElement.textContent = video.title;

        videoDiv.appendChild(videoElement);
        videoDiv.appendChild(titleElement);

        resultsDiv.appendChild(videoDiv);
    });
}

// عرض جميع الفيديوهات عند تحميل الصفحة
displayVideos(videos);

// وظيفة البحث
function fetchVideos() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchInput));
    displayVideos(filteredVideos);
}

document.getElementById("searchButton").addEventListener("click", fetchVideos);

// يمكنك إضافة وظائف أخرى هنا إذا كنت بحاجة إليها


