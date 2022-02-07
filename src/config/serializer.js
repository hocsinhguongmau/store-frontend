export const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} target='_blank' rel='noopener'>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
    textAlignment: ({ mark, children }) => {
      if (mark.alignment === 'right') {
        return (
          <span
            style={{
              textAlign: 'right',
              display: 'inline-block',
              width: '100%',
            }}>
            {children}
          </span>
        )
      } else if (mark.alignment === 'center') {
        return (
          <span
            style={{
              textAlign: 'center',
              display: 'inline-block',
              width: '100%',
            }}>
            {children}
          </span>
        )
      } else {
        return <span>{children}</span>
      }
    },
  },
}
