<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <link rel="stylesheet" href="./style.css">
    <title>PintaWeb</title>
</head>

<body>

    <section class="container">
        <canvas width="1500" height="900"></canvas>

        <div>
            <section class="tool-box">
                <button class="button__tool active" data-action="brush">
                    <span class="material-symbols-outlined">brush</span>
                </button>

                <button class="button__tool" data-action="rubber">
                    <span class="material-symbols-outlined">ink_eraser</span>
                </button>

                <button class="button__tool" data-action="color">
                    <input type="color" class="input__color">
                </button>
            </section>

            <div>
                <section class="tool-box">
                    <button class="button__size" data-size="5">
                        <span class="stroke"></span>
                    </button>

                    <button class="button__size" data-size="10">
                        <span class="stroke"></span>
                    </button>

                    <button class="button__size active" data-size="20">
                        <span class="stroke"></span>
                    </button>

                    <button class="button__size" data-size="30">
                        <span class="stroke"></span>
                    </button>
                </section>

                <section class="tool-box">
                    <button class="button__tool button__clear">
                        <span class="material-symbols-outlined">delete</span>
                    </button>

                </section>
            </div>

        </div>
    </section>
    <script src="./script.js"></script>
</body>

</html>
