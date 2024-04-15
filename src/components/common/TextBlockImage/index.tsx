import { Container, Grid, Typography } from '@mui/material'
import clsx from 'clsx'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type TextBlockImageProps = BaseBlock & {
  variant: 'image-text' | 'text-image'
  mobileVariant?: 'image-text' | 'text-image'
}

const TextBlockImage = ({ caption, title, text, buttons, image, variant, mobileVariant }: TextBlockImageProps) => {
  return (
    <Container>
      <Grid
        container
        className={clsx(
          layoutCss.containerMedium,
          variant === 'image-text' ? css.imageFirst : css.textFirst,
          mobileVariant === 'text-image' ? css.textFirstMobile : null,
        )}
        spacing={{ xs: 6, md: '30px', xl: '50px' }}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          {caption && (
            <Typography variant="caption" component="div">
              {caption}
            </Typography>
          )}
          <Typography variant="h2">{title}</Typography>
          <Typography className={css.textBlock}>{text}</Typography>
          <ButtonsWrapper buttons={buttons} />
        </Grid>

        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <div className={css.imageWrapper}>
            <img src="/images/Home/manifesto-bg.png" alt="Particles background" className={css.bgImage} />
            {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextBlockImage
