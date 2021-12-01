import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.kolpaper.com/wp-content/uploads/2020/12/Harry-Potter-Phone-Wallpaper.jpg"
        profileSrc="https://scontent.fudi2-1.fna.fbcdn.net/v/t39.30808-6/257930987_4139677742804798_4412128644595272373_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGiAAMnLxUG3p4z7Ai1bpmfIE5bniy99O4gTlueLL307u3XI_8PZskCaRZAQ-6GC6FoMxRofvB8iRSoJ25u-vLU&_nc_ohc=AZXS5hAWi8sAX_6b3MF&_nc_ht=scontent.fudi2-1.fna&oh=a5a0bf572e9091d82c4c8f5d50cbd7ca&oe=61AD2531"
        title="Harry Potter"
      />
      <Story
        image="https://cdn.ome.lt/_Syh82fIJriwSyO5oCBngvSG3q8=/970x360/smart/uploads/conteudo/fotos/halo-infinite-header_lEeIyLz.jpg"
        profileSrc="https://avatarfiles.alphacoders.com/183/thumb-183310.jpg"
        title="Master Chief"
      />
      <Story
        image="https://cdna.artstation.com/p/assets/images/images/028/229/304/small/rup_k-_arts-ezio-auditore-brotherhood.jpg?1593850970"
        profileSrc="https://cdnb.artstation.com/p/assets/images/images/033/939/027/small/guner-bolukbasi-ezioacbrotherhood-practice4big.jpg?1610979855"
        title="Ezio Auditore"
      />
      <Story
        image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2016%2F07%2F18%2F151204_BB_Han-Solo.jpg.CROP_.promo-xlarge2.jpg"
        profileSrc="https://www.otempo.com.br/polopoly_fs/1.1066454.1534205849!httpImage/image.jpg_gen/derivatives/main-horizontal-photo-gallery-leading-fit_620/image.jpg"
        title="Han Solo"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSJN0gvDFsAjUYVZ4hmtZnMnOX1O_otmudw&usqp=CAU"
        profileSrc="https://www.giantbomb.com/a/uploads/square_medium/15/151174/2194850-ed_177_animestocks_com_.jpg"
        title="Edward Elric"
      />
    </div>
  );
}

export default StoryReel;
