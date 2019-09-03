
let net;

var path = '';

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('imagePreview');
//  const imgEl = "/Users/yauvan/documents/dev/python/machine-learning/siraj-raval-how-to-make-money-with-machine-learning/custom-image-classifier-using-tensorflow/app/static/uploads/14445070_10154442606100185_6492572023420437484_o.jpeg"
  console.log(imgEl)
  const result = await net.classify(imgEl);
  console.log(result);
  console.log(result[0].className);
  console.log(result[0].probability);
  $('#result').fadeIn(600);
  $('#result').text(' Result:  ' + result[0].className + '\n' + 'Probability Score: ' + ((result[0].probability)*100).toFixed(2) + '%');
}



$(document).ready(function () {

    // Init
    $('.image-section').hide();
    $('#btn-predict').hide();
    $('.loader').hide();
    $('#result').hide();


    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        //  app();
          var form_data = new FormData($('#upload-file')[0]);

        $.ajax({
            type: 'POST',
            url: '/upload',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                path = data;
                document.getElementById('imagePreview').src = 'static/'+path;
            },

        });
    });


    // Predict
    $('#btn-predict').click(function () {
        //document.getElementById('imagePreview').src = 'static/'+path;
        console.log(document.getElementById('imagePreview'));
        app();

    });

});
