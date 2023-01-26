import { Grid, styled, Typography } from "@mui/material"
import { graphql } from "gatsby"
import * as React from "react"
import { FC } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Img from "gatsby-image"

interface Props {
  data: Queries.AboutQuery
  errors?: Error[]
}

const AboutPage: FC<Props> = ({ data, errors }) => {
  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return (
    <Layout>
      <main>
        <SEO title="enkake About" />
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h2" sx={{ mb: 4 }}>Our Policy</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>「日本の温泉文化を、変えないために変える」</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              日本の温泉文化を、未来へつなぐ。<br />
              伝統と歴史を重んじ、深い理解を持つ。<br />
              現代を尊重し、温泉文化を革新させる。
            </Typography>
            <Typography variant="body1" component="p">
              「温泉」の本質的価値を、新たなカタチで全国に、<br />
              そして世界へ向けて。<br />
              新時代の日本温泉文化を伝承し、発信します。
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Img fluid={data.img1!.childImageSharp!.fluid!} />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} md={5}>
            <Img fluid={data.img2!.childImageSharp!.fluid!} />
            <Typography variant="body2" component="p" sx={{ mt: 4 }}>
              2022年度の温泉施設数<br />
              20,792 軒<br />
              <small>※ 平成19年度の温泉施設数: 22,766 施設 (-1,980 施設)</small>
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h2" sx={{ mb: 4 }}>Our Vision</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>「20,000 施設の温泉施設数を未来へ残す」</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              人口減少、趣味の選択肢の増加といった市場の持つ要因。<br />
              施設老朽化や後継者不足といった事業者の抱える要因。<br />
              双方の要因にアプローチし、温泉文化を後世に残します。
            </Typography>
            <Typography variant="body1" component="p">
              古くは治癒の場から娯楽施設へ。<br />
              時代によって変わり続ける市場のニーズ。<br />
              急激に進む時代の流れに取り残されてしまう温泉地に未来の目を向けること
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>Our Members</Typography>
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} md={4}>
            <Img fluid={data.reona!.childImageSharp!.fluid!} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>代表取締役 CEO</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>須藤 玲央奈 (すどう れおな)</Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              (株) Wonder Wanderers 代表取締役<br />
              (株) G&W Outdoors取締役<br />
              (株) Crafitコンテンツパートナー<br />
              一橋大学商学研究科 経営学修士 (MBA)
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              実家は、浴室に源泉を引くほど温泉好きの家族。幼少期は競技スキーの練習後に強酸性硫黄泉の蔵王温泉に入ることがルーティンだった。 サラリーマン時代はモエ・ヘネシー・ルイ・ヴィトン (LVMH) のラグジュアリーマーケティングに従事し、高級酒のブランドマネジャーとして活躍。 その経験を活かし、起業後は国立公園をはじめとする自然環境をラグジュアリーの観点から盛り上げる事業を行う。 日本全国を飛び回り、行政省庁や民間事業者とともに地方を再活性化させるプロジェクトを多々着手するなかで、廃れゆく温泉文化を肌で 感じ、自分の経験と情熱を温泉文化の復興に捧げることを決意。
            </Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              好きな温泉地:蔵王温泉<br />
              好きな泉質:強酸性硫黄泉
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img fluid={data.tatsu!.childImageSharp!.fluid!} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>取締役 エバンジェリスト</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>井出 辰之助 (いで たつのすけ)</Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              (株) infusiondesign 代表/イベントプロデューサー
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              1999年より野外音楽フェス、アートイベント、企業イベント等の企画・制作・運営として、これまで1000以上のイベントに携わる。 2019年5月WOWOWと共に静岡県富士市で野外音楽フェス「FUJI&SUN」を主催。趣味は温泉と登山とバックカントリー。 温泉はこれまでに700湯以上を巡り、2019年から"YAMAP"のウェブマガジンで温泉コラムの連載開始と共に温泉プロジェクト"湯口は宇宙"を スタートさせる。
            </Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              好きな温泉地: 帯広 (丸美ヶ丘温泉)<br />
              好きな泉質: ぬる湯の泡付きモール泉
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img fluid={data.ebi!.childImageSharp!.fluid!} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>取締役 COO</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>衣斐 誠 (えび まこと)</Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              フォトグラファー<br />
              インスタンスゼロ株式会社 プロジェクトマネージャー兼出資メンバー<br />
              温泉ソムリエ<br />
              サウナスパ・プロフェッショナル
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              親の影響で幼少より温泉に親しみ、 大人になってからはサウナにはまる。フォトグラファーとして世界で活躍するアーティストの撮影をする傍ら、パラレルキャリアで IT 企業の PM として様々なクライアントワークや自社事業を経験。(リクルート、Walmart、ぐるなび、その他大手企業多数) またサウナ好きが高じて日本初のオンラインサウナイベント・サウナバザールを共同立ち上げ。様々な温浴関係者とも交流を深める。これまで得た独自の知見を活かし、これからの未来にとって必要と思われる新たな事業に挑戦中。
            </Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              好きな温泉地: 山梨一帯<br />
              好きな泉質: モール泉
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img fluid={data.ngs!.childImageSharp!.fluid!} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>取締役 CTO</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>長瀨 敦史 (ながせ あつし)</Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              インスタンスゼロ株式会社 共同創業者・ソフトウェア開発者・代表取締役
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              ソフトウェア開発者。モバイル・デスクトップ・Web アプリケーションなど、多岐にわたるソフトウェアビジネスの構築やオープンソースソフトウェ ア開発を経験。Modelmap, CAMPFIRE, Oneteam, Kaizen Platform, AppSocially などのスタートアップで、創業期から Web やネイティブアプ リケーション、SDK などの設計・開発、開発チームの牽引を行う。2018年インスタンスゼロ株式会社を創業。大手企業のサービス構築・開発者 育成、運用支援などを行う。
            </Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              好きな温泉地: 増富ラジウム温泉、奥日光 温泉寺<br />
              好きな泉質: 硫黄泉
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Img fluid={data.satoru!.childImageSharp!.fluid!} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" component="p" sx={{ mb: 1 }}>取締役 ディレクター</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 4 }}>明石 悟 (あかし さとる)</Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              The.株式会社 代表<br />
              温泉ソムリエ
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              美容業界から個人事業に転身後、イベント制作業を主にファッションや音楽、アウトドア関連の企画・制作・運営等様々な案件に関わる。 2022年度よりThe.株式会社を創業、業務の繋がりの濃い数社と企画や制作部門で委託関係となり更に活動の場を広げている。山に関連した遊びが好きで グリーンシーズンは登山やトレイルラン、スノーシーズンはスノーボードに向かう傍ら 本物の温泉のもつ魅力に惹かれ、各地を巡る楽しさを覚えてしまう。
            </Typography>
            <Typography variant="body2" component="p" sx={{ mb: 4 }}>
              好きな温泉地: 田澤温泉、姥子温泉<br />
              好きな泉質: アルカリ性単純泉
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>Company Profile</Typography>
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Table>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社enkake (欧文表記: enkake Inc.)</td>
                </tr>
                <tr>
                  <th>創業年月日</th>
                  <td>2022年12月6日</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>3,000,000 円</td>
                </tr>
                <tr>
                  <th>株主構成</th>
                  <td>発起人で構成</td>
                </tr>
                <tr>
                  <th>本社所在地</th>
                  <td>東京都渋谷区東2丁目27−4 エビス東ハイツ 603</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>
                    <ol>
                      <li>温浴施設ならびに宿泊施設に関するデータベースの企画運営</li>
                      <li>温浴施設ならびに宿泊施設に関するコンテンツの企画運営</li>
                      <li>温浴施設ならびに宿泊施設に関する企画運営</li>
                      <li>温浴施設ならびに宿泊施設に関する経営コンサルティング</li>
                      <li>その他付随する一切の業務</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyALUPau-Uj52Tcv54SHn2465nnYpgJek98&q=東京都渋谷区東2丁目27−4+エビス東ハイツ">
            </iframe>
          </Grid>
        </Grid>
        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>Contact Us</Typography>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfQ08C7V8gRcZLOmoxjL57umyFnWKnYfbckbtQfSbNyC-FLbA/viewform?embedded=true"
          width="100%"
          height="920"
          style={{ border: 0 }}
        >Loading…</iframe>
      </main>
    </Layout >
  )
}

export default AboutPage

const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
  }
`

export const pageQuery = graphql`
        query About {
          img1: file(relativePath:{eq:"about-section1.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        img2: file(relativePath:{eq:"about-section2.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        reona: file(relativePath:{eq:"member-reona.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        tatsu: file(relativePath:{eq:"member-tatsu.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        ebi: file(relativePath:{eq:"member-ebi.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        satoru: file(relativePath:{eq:"member-satoru.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
        ngs: file(relativePath:{eq:"member-ngs.jpg"}) {
          childImageSharp{
          fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
