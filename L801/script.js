let promise = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let minute = new Date().getMinutes();
        if (minute % 2 == 0)
        {
            resolve(minute);
        }
        else reject('არაკორექტული დრო');
    }, 10000);
});

promise.then(
    result => alert('შედეგი: '+result),
    error => alert('შეცდომა: '+error)
) 