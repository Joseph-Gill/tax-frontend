import React from 'react';
import styled from 'styled-components/macro';

const Policy = styled.div`
    color: black;
    overflow-y: scroll;
    height: 70vh;

    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }


    div {
      margin-top: 10px;
    };
`;

export const PrivacyPolicy = ( { children } ) => {
  return (
      // eslint-disable-next-line react/no-adjacent-inline-elements
      <Policy>
          This is the Stark Privacy Policy<br /><br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium sapien vel elit consequat, quis luctus mi
          lobortis. Duis malesuada consectetur libero eu cursus. Ut ac rhoncus mi. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Donec a nunc risus. Donec et lacus id felis rutrum feugiat. Vestibulum non
          mi efficitur, ultricies massa ut, vestibulum magna. Suspendisse vehicula mi turpis, convallis dapibus nisi mollis vel.
          Pellentesque imperdiet rutrum ante, feugiat tristique mauris sollicitudin sed. Curabitur quis dapibus odio, non
          sodales orci.<br /><br />

          Sed feugiat purus id felis semper, at ornare elit volutpat. Etiam id fringilla tellus, et maximus turpis.<br /><br />

          Vivamus pharetra lobortis leo, id interdum lectus ultrices nec.<br /><br />

          Duis feugiat lectus nec tincidunt pharetra. Vivamus condimentum purus dui. Nunc lobortis placerat est, nec varius lectus
          rhoncus eu. Pellentesque justo sem, fermentum id malesuada mattis, scelerisque et arcu. Donec semper eleifend dignissim.
          Aenean rhoncus blandit felis, sit amet sollicitudin est fringilla ut. Fusce pulvinar purus turpis.<br /><br />

          Sed scelerisque diam a magna porttitor, sit amet blandit turpis congue. Aliquam tincidunt sem a mauris venenatis, ac
          condimentum arcu accumsan. Nulla placerat vulputate ultricies. Etiam et mattis libero. Maecenas odio turpis, tincidunt et
          mollis sit amet, tempor convallis nisi. Aliquam in scelerisque orci. Nunc euismod euismod maximus.<br /><br />

          Fusce ornare, ipsum quis imperdiet laoreet, felis urna gravida magna, id consectetur nulla velit in elit. Sed in leo eros.
          Phasellus placerat, quam non gravida viverra, dolor augue fringilla eros, a cursus sem risus sed nisi.<br /><br />

          Sed quis feugiat magna.

          Quisque dignissim mi in ex malesuada, sed bibendum tortor viverra. Nunc consectetur quis purus in ornare. Morbi luctus, nunc
          ut eleifend sollicitudin, sapien neque gravida odio, non iaculis quam arcu ut diam. Vivamus massa magna, bibendum ac
          pharetra at, facilisis vel orci.<br /><br />

          Donec ornare, ex vitae tincidunt mattis, ex metus mollis nunc, eu dignissim tortor nibh ac felis. Nulla aliquet felis ac dolor
          imperdiet feugiat. Fusce a mauris sem.<br /><br />

          Nunc malesuada elit neque, a luctus nibh euismod sed.

          Nam rhoncus arcu nisl, sit amet iaculis enim sollicitudin in. Maecenas ultricies dolor leo. Aenean posuere, lorem sit amet
          gravida sodales, enim est vulputate ligula, quis tincidunt erat metus in tellus.<br /><br />


          Aliquam a mollis orci. Sed euismod dui eget massa dapibus, quis bibendum leo mattis. Ut ullamcorper efficitur lectus, quis
          tempus magna tristique quis.<br /><br />
          <div>
              { children }
          </div>
      </Policy>
  );
};
