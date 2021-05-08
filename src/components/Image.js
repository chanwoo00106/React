var fs = require('react-native-fs');

export default function Image(){

    function imagePath(){
        RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        .then((result) => {
            console.log(result);
        });
    }
    
    return (
        <>
            <fieldset className="image-fieldset">
                <legend>사진</legend>
                <button onClick={imagePath}>click</button>
            </fieldset>
        </>
    );
}