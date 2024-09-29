<?php get_header(); ?>

        <h2 class="main-visual">
            <p class="site-logo">
            EMIKO KAWAHATA <br> 
            PORTFOLIO
            </p>
        </h2>
    
    <main>
        <section id="works" class="wrapper">
            <div class="test">
            <h3 class="section-title">WORKS</h3>
            <div class="swiper_contents">
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <div class="swiper-slide">
                  <img src="<?php echo esc_url(get_theme_file_uri('img/COFFEE SITE.jpg')); ?>" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="<?php echo esc_url(get_theme_file_uri('img/STORE SITE.jpg')); ?>" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="<?php echo esc_url(get_theme_file_uri('img/SNEAKER SITE.jpg')); ?>" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="<?php echo esc_url(get_theme_file_uri('img/LP SITE.jpg')); ?>" alt="">
                  </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
              
                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              
                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div> -->
              </div>
            </div>
                <div class="link-text">
                    <a href="intdex2.html">VIEW MORE ▶</a>
                </div>
            </div>
        </section>        

        <section id="about" class="wrapper">
            <div class="test">
            <h3 class="section-title">ABOUT</h3>
            <div class="contents">
                <div class="about-work">
                    <div class="about-history"><p>自己紹介</p></div>
                    <div class="about-office">
                        <div class="about-year">
                            <img src="img/IMG_1545_VSCO.JPG" alt=""></p>
                        </div>
                        <dl>
                            <dt>名前：</dt>
                            <dd>川畠 恵美子 Kawahata Emiko</dd>
                            <dt>生年月日：</dt>
                            <dd>1982年11月23日</dd>
                            <dt>血液型：</dt>
                            <dd>B型</dd>
                            <dt>メールアドレス：</dt>
                            <dd>funkjazz573@outlook.jp</dd><br>
                            <dd>1982年11月 神奈川県生まれ。現在は、東京都三鷹市に在住。
                                前職では情報ステム部にて社内システムの導入および運用管理に従事。<br>
                                主にMicrosoft365、Salesforce等のSaas製品を担当。また係長として社内調整や新人教育を行う。
                                2024年1月末日に退職。<br>
                                退職後はWeb制作スクールに通いスキルアップを目指す。</dd>
                        </dl>
                    </div>
                    </div>
                </div>
            <div class="link-text">
                <a href="">VIEW MORE ▶</a>
            </div>
        </div>
        </section>

        <section id="contact" class="wrapper">
            <div class="test">
            <h3 class="section-title">CONTACT</h3>
            <div class="contact-form">
            <form action="#" method="post">
                <dl>
                    <dt>
                        <label for="name">NAME*</label>
                    </dt>
                    <dd>
                        <input type="text" id="name" name="your-name">
                    </dd>
                    <dt>
                        <label for="email">E-MAIL*</label>
                    </dt>
                    <dd>
                        <input type="email" id="email" name="your-email">
                    </dd>
                    <dt>
                        <label for="message">MESSAGE*</label>
                    </dt>
                    <dd>
                        <textarea name="your-message" id="message"></textarea>
                    </dd>
                </dl>
                <p class="attention_text">*は必須入力項目です。</p>
                <div class="button"><input type="confirm" value="CONFIRM"></div>
            </form>
        </div>
    </div>
        </section>
    </main>

    <?php get_footer(); ?>