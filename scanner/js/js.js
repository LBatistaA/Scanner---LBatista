$('#stopbtn').click(function(){
    $('#startbtn img').show();
    $('#stopbtn').hide();
    var videoE1 = document.getElementById('previwe');
    stream = videoE1.srcObject;
    tracks = stream.getTracks();
    tracks.forEach(function(track){
        track.stop();

    });
    videoE1.srcObject = null;
})

$('#startbtn').click(function(){
            $('#startbtn img').hide();
            $('#stopbtn').show();
            var scanner = new Instascan.Scanner({video : document.getElementById('previwe'),scanPeriod: 5, mirror: false});
            scanner.addListener('scan',function(content){
                $('#msg2').text(content);

            });

           Instascan.Camera.getCameras().then(function(cameras){
                if(cameras.length > 0){
                    scanner.start(cameras[0]);
                   $('[name="options"]').on('change',function(){
                       if($(this).val()==1){
                            if(cameras[0]!=""){
                                scanner.start(cameras[0]);
                            }else{
                               alert('No front Camera Found');
                            }
                        }
                        else if($(this).val()==2)
                        {
                            if(cameras[1]!=""){
                                scanner.start(cameras[1]);
                            }
                            else {
                                alert('No back Camera found');
                            }
                        }

                    });
                }
                else
                {
                    alert('No camera Found');
                }
                
                
            }).catch(function(e){

                alert(e);

            });
});